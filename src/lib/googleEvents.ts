interface EventProps {
  action: string;
  category: string;
  label: string;
  value: number | string;
}
const googleEvent = ({ action, category, label, value }: EventProps) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const createUserEvent = (value : string | number) => {
  googleEvent({
    action: "Create User",
    category: "User",
    label: "New user is created",
    value
  });
};
