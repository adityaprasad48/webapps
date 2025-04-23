import React, { useEffect } from "react";
import "./WebDialog.css"; // Assuming you have a CSS file for styling

const WebDialog = () => {
  useEffect(() => {
    function DialogBase(content = "", options = {}) {
      options = {
        title: "Dialog",
        submitLabel: "Submit",
        cancelLabel: "Cancel",
        allowClickOut: true,
        ...options
      };
      
      const dialog = document.createElement("div");
      dialog.className = "dialog";
      dialog.innerHTML = `
        <div class="dialog-container" 
             tabindex="0" role="dialog" aria-label="${options.title}">
             ${options.title 
                ? `
                <div class="dialog-header">
                  <h3>${options.title}</h3>
                </div>
                `
                : ''
             }
             <div class="dialog-content">
               ${content}
             </div>
             <div class="dialog-footer">
                <button type="button" class="cancel-btn">${options.cancelLabel || 'Cancel'}</button>
                ${options.submitLabel 
                  ? `<button type="button" class="submit-btn">${options.submitLabel}</button>`
                  : ''}
             </div>
        </div>
      `;
      
      let data = {};
      const submitBtn = dialog.querySelector('.submit-btn');
      const cancelBtn = dialog.querySelector('.cancel-btn');
      const container = dialog.children[0];
      const htmlContent = dialog.querySelector('.dialog-content');
      
      if(submitBtn) {
        submitBtn.addEventListener('click', () => {
          dialog.dispatchEvent(new Event('dialog-submit'));
          this.close();
        })
      }
      
      cancelBtn.addEventListener('click', () => {
        dialog.dispatchEvent(new Event('dialog-cancel'));
        this.close();
      });
      
      dialog.addEventListener('keydown', e => {
        if(e.keyCode === 27) { // esc key
          this.close();
        } else if(e.keyCode === 13) { // enter/return key
          const focusedEl = document.activeElement;
          
          if(submitBtn && focusedEl !== cancelBtn) {
            dialog.dispatchEvent(new Event('dialog-submit'));
            this.close();
          }
        }
      })
      
      // all public method and properties
      this.updateData = (key, value) => {
        data[key] = value;
      }
      
      this.content = htmlContent;
      
      this.open = () => {
        document.body.appendChild(dialog);
        
        if(options.allowClickOut) { 
          dialog.addEventListener('click', (e) => {
            if(e.target === dialog) {
              this.close();
            }
          })
        }
        
        // focus on dialog container
        container.focus();
      }
      
      this.close = () => {
        dialog.remove();
        dialog.dispatchEvent(new Event('dialog-closed'));
      }
      
      this.onClose = cb => {
        dialog.addEventListener("dialog-closed", cb)
      }
      
      this.onCancel = cb => {
        dialog.addEventListener("dialog-cancel", cb)
      }
      
      this.onSubmit = cb => {
        dialog.addEventListener("dialog-submit", () => cb(data))
      }
    }
    
    // function InputDialog(initialValue = "", options = {}) {
    //   DialogBase.apply(this, [
    //     `<input class="input-field" type="text" value="${initialValue}"`,
    //     {submitLabel: 'Save', ...options}
    //   ]);
      
    //   const field = this.content.querySelector('.input-field');
      
    //   field.addEventListener('input', e => {
    //     this.updateData('value', e.target.value);
    //   })
      
    //   this.onClose(() => {
    //     field.value = "";
    //   })
    // }
    
    // function ConfirmDialog(description, options = {}) {
    //   DialogBase.apply(this, [
    //     `<p>${description}</p>`,
    //     {title: "Confirm", allowClickOut: false, ...options}
    //   ]);
    // }
    
    // class can extend constructor functions
    // same as the "InputDialog" with constructor function
    class InputDialog extends DialogBase {
      constructor(initialValue = "", options = {}) {
        super(
          `<input class="input-field" type="text" value="${initialValue}"`,
          {submitLabel: 'Save', ...options}
        );
        
        this.updateData('value', initialValue);
        
        const field = this.content.querySelector('.input-field');
      
        field.addEventListener('input', e => {
          this.updateData('value', e.target.value);
        })
    
        this.onClose(() => {
          field.value = "";
        })
      }
    }
    
    // same as the "ConfirmDialog" with constructor function
    class ConfirmDialog extends DialogBase {
      constructor(description, options = {}) {
        super(
          `<p>${description}</p>`,
          {title: "Confirm", allowClickOut: false, ...options}
        )
      }
    }
    
    const item = document.querySelector('.action-item');
    const itemButtons = item.querySelectorAll('button');
    const [detailsBtn, editBtn, deleteBtn] = itemButtons;
    
    detailsBtn.addEventListener('click', () => {
      const dialog = new DialogBase(
        "<h3>Details</h3>" +
        "<p>This is some random details about the itme</p>",
        {
          title: null,
          submitLabel: null,
          cancelLabel: "Ok"
        }
      );
      
      dialog.open();
    })
    
    editBtn.addEventListener('click', () => {
      const dialog = new InputDialog(item.children[0].textContent);
      
      dialog.open();
      
      dialog.onSubmit(data => {
        item.children[0].textContent = data.value;
      })
    })
    
    deleteBtn.addEventListener('click', () => {
      const dialog = new ConfirmDialog("Are you sure you want to delete this item?");
      
      dialog.open();
      
      dialog.onSubmit(() => {
        item.remove();
      })
    })
  }, []);

  return (
    <div>
      <div className="action-item">
        <p>Custom DropDown Test Item</p>
        <button className="details-btn">details</button>
        <button className="edit-btn">edit</button>
        <button className="delete-btn">delete</button>
      </div>
    </div>
  );
};

export default WebDialog;
