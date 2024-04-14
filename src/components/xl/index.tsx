import withPortal from "@/components/HOC/withPortal";
import Card from "./Card";
import Nav from "./Nav";
import BaseDialog from "./Dialog";

const Dialog = withPortal(BaseDialog);

export { Card, Nav, Dialog };
