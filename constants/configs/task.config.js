export const taskConfig = [
  {
    key: "icon",
    label: "Icon",
    type: "iconPicker",
    default: "check-square",
  },
  {
    key: "color",
    label: "Color",
    type: "colorPicker",
    default: "task-red",
  },
  {
    key: "title",
    label: "Title",
    type: "text",
    inputOptions: {
      required: true,
      placeholder: "Enter title",
    },
  },
  {
    key: "description",
    label: "Description",
    type: "text",
    inputOptions: {
      placeholder: "Enter description",
      numberOfLines: 4,
    },
  },
  {
    key: "days",
    label: "days",
    type: "daysPicker",
    default: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    key: "time",
    label: "Time",
    type: "timePicker",
    default: "06:00",
  },
  {
    key: "reminders",
    label: "Reminders",
    type: "toggle",
    default: true,
  },

  //Pro Plan
  {
    key: "reminder-message",
    label: "Reminder Message",
    type: "text",
    inputOptions: {
      placeholder: "Enter reminders message",
      numberOfLines: 2,
    },
    default: "",
  },
  {
    key: "reminder-time",
    label: "Reminder Time",
    type: "timePicker",
    default: "06:00",
  },
  {
    key: "image",
    label: "Image",
    type: "imageUploader",
    default: "",
  },
];
