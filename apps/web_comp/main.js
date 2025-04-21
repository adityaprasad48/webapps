class BlogPost extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: "open",
      delegatesFocus: true,
    });

    this.shadowRoot.innerHTML = `
    <div>
    <h2>My Post title</h2>
    <p>Lorem ipsum, dolor sit amet con
    sectetur adipisicing elit. Dignissimos, provident atque voluptate vero alias corporis ea quo aperiam libero quaerat. Voluptatum cum fugit explicabo, expedita dolores amet exercitationem vel temporibus!</p>
    <a href="">Learn more</a>
    </div>
    `;
  }

  connectedCallback() {
    console.log("---- mounted");
  }

  disconnectedCallback() {
    console.log("---- unmounted");
  }
}

customElements.define("blog-post", BlogPost);

{
  
}