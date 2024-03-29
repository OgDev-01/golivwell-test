import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function Ratings({ value }: { value: number }) {
  return <Rating style={{ maxWidth: 110 }} value={3} readOnly />;
}
