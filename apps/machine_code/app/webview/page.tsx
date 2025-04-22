import ParallexView from "@/components/parallex/ListAndMenu";
import BorderShape from "@/components/web_views/BorderShape";
import BoxShadow from "@/components/web_views/BoxShadow";
import CustomInput from "@/components/web_views/CustomInput";
import CustomSelect from "@/components/web_views/CustomSelect";
import WebView from "@/components/web_views/WebView";

export default function webview() {
  return (
    <div>
      <BoxShadow/>
      <BorderShape />
      <CustomSelect />
      <CustomInput />
      {/* <ParallexView /> */}
      {/* <WebView /> */}
    </div>
  );
}
