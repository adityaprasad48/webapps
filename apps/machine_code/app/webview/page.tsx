import ParallexView from "@/components/parallex/ListAndMenu";
import CustomInput from "@/components/web_views/CustomInput";
import CustomSelect from "@/components/web_views/CustomSelect";
import WebView from "@/components/web_views/WebView";

export default function webview() {
  return (
    <div>
      <CustomSelect />
      <CustomInput/>
      {/* <ParallexView /> */}
      {/* <WebView /> */}
    </div>
  );
}
