import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import '../global.css';


export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Transactions</Label>
        <Icon sf={{default : "book.pages", selected : "book.pages.fill"}} drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="loans">
        <Label>Loans</Label>
        <Icon sf={{default : "creditcard", selected : "creditcard.fill"}} drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf={{default : "gearshape", selected : "gearshape.fill"}} drawable="custom_settings_drawable" />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
