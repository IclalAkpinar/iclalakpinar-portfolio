import { ConfigProvider, Drawer } from "antd";
import { SidebarBody } from "./SidebarBody";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";

export const SideBar = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorIcon: "#fff",
          colorBgElevated: "#000",
        },
      }}
    >
      <Drawer
        onClose={close}
        open={open}
        closeIcon={<></>}
        styles={{
          body: {
            padding: 0,
          },
          header: {
            paddingTop: 0,
            paddingBottom: 0,
            display: "none",
          },
          footer: {
            padding: 0,
          },
        }}
        width={250}
        footer={<SidebarFooter />}
        keyboard
        className=" max-h-screen"
      >
        <SidebarHeader close={close} />
        <SidebarBody close={close} />
      </Drawer>
    </ConfigProvider>
  );
};
