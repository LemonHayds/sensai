export const taskConfig = [
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
      multiline: true,
    },
  },
  {
    key: "days",
    label: "Days",
    type: "daysPicker",
    inputOptions: {
      multiple: true,
    },
    default: [],
  },
  {
    type: "multiple",
    key: "time-and-reminders",
    elements: [
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
    ],
  },
  {
    key: "color",
    label: "Color",
    type: "colorPicker",
    default: "task-red",
  },
  {
    key: "icon",
    label: "Icon",
    type: "iconPicker",
    default: "check-square",
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
