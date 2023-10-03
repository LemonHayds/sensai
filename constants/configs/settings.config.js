export const settingsConfig = [
  {
    key: "dark-mode",
    label: "Dark Mode",
    type: "toggle",
    default: false,
  },
  {
    key: "font-style",
    label: "Font Style",
    type: "select",
    default: "default",
    inputOptions: {
      selectItems: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Modern",
          value: "modern",
        },
      ],
    },
  },
  {
    key: "favourite-color",
    label: "Favourite Color",
    type: "colorPicker",
    default: "#7C191E",
  },
  {
    key: "notifications-enabled",
    label: "Notifications",
    type: "toggle",
    default: true,
  },
  {
    key: "haptic-feedback",
    label: "Haptic Feedback",
    type: "toggle",
    default: true,
  },
];
