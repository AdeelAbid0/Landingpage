"use client";

import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function AntdProvider({ children }) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#8E81F5",
            borderRadius: 6,
            fontFamily: "var(--font-inter), sans-serif",
          },
          components: {
            Input: {
              paddingInline: 16,
              borderRadius: 12,
              controlHeight: 44,
              controlHeightSM: 40,
              hoverBorderColor: "#8E81F5",
              activeBorderColor: "#8E81F5",
              activeShadow: "0px 0px 0px 4px #F4F2FF",
              colorError: "#EF4444",
              colorErrorBg: "#EF4444",
              colorErrorBorder: "#EF4444  ",
              colorErrorText: "#EF4444  ",
              errorActiveShadow: "0px 0px 0px 4px #EF444422",
              errorHoverShadow: "0px 0px 0px 4px black",
            },
            Button: {
              controlHeight: 44,
              controlHeightSM: 40,
              borderRadius: 8,
              borderRadiusSM: 8,
              colorPrimaryText: "white",
              paddingInline: 16,
              paddingInlineSM: 16,
              defaultBg: "#F3F1FD",
              defaultColor: "#000000",
              defaultBorderColor: "transparent",
              defaultHoverBg: "#F3F1FDaa",
              defaultHoverColor: "#8E81F5",
              defaultHoverBorderColor: "transparent",
              defaultActiveBg: "#F3F1FD",
              defaultActiveColor: "#8E81F5",
              defaultActiveBorderColor: "transparent",
              colorLink: "#8E81F5",
              colorLinkHover: "#8E81F5aa",
              colorLinkActive: "#8E81F5",
              colorBgContainerDisabled: "#D7D7D7",
              colorTextDisabled: "#737373",
            },
            Checkbox: {
              controlInteractiveSize: 17,
              borderRadiusSM: 5,
              colorPrimary: "#8E81F5",
              colorPrimaryHover: "#8E81F5",
            },
            Select: {
              paddingBlock: 5,
              paddingInline: 16,
              borderRadius: 12,
              colorText: "#262626",
              colorBorder: "#E5E5E5",
              hoverBorderColor: "#8E81F5",
              activeBorderColor: "#8E81F5",
              controlHeight: 44,
              activeShadow: "0px 0px 0px 4px #F4F2FF",
              colorTextPlaceholder: "#878787",
              multipleItemHeight: 32,
              multipleItemBg: "#F3F1FD",
              multipleItemBorderColor: "#F3F1FD",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
