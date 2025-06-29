import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Dimensions {
  width: string;
  maxWidth: string;
  height: string;
  maxHeight: string;
}

export function PopoverDemo() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: "100%",
    maxWidth: "300px",
    height: "25px",
    maxHeight: "none",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDimensions({
      ...dimensions,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Dimensions:", dimensions);
    // Handle the dimensions values here (e.g., send to an API, update state elsewhere, etc.)
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                value={dimensions.width}
                onChange={handleChange}
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                value={dimensions.maxWidth}
                onChange={handleChange}
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                value={dimensions.height}
                onChange={handleChange}
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                value={dimensions.maxHeight}
                onChange={handleChange}
                className="col-span-2 h-8"
              />
            </div>
          </div>
          <Button onClick={handleSubmit} className="mt-4">Submit</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
