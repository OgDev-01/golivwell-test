"use client";

import { Input } from "../Shared/Input";
import Button from "../Shared/Button";

export default function Form() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Thanks for submitting your email!");
      }}
      className="flex flex-col gap-2 flex-1"
    >
      <Input containerClassName="flex-1" placeholder="Enter your email" />
      <Input type="email" placeholder="Email" containerClassName="flex-1" />
      <Button className="w-max">Submit</Button>
    </form>
  );
}
