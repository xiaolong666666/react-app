import withPortal from "@/components/HOC/withPortal";
import Card from "./Card";
import Nav from "./Nav";
import Loading from "./Loading";
import BaseDialog from "./Dialog";
import VirtualScroller from "./VirtualScroller";

const Dialog = withPortal(BaseDialog);

export { Card, Nav, Loading, Dialog, VirtualScroller };
