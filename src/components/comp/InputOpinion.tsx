import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/base/select";
import { Label } from "@/components/base/label";

interface IOpinion {
  mainText: string;
  desc: string;
  onValueChange?: (value: string) => void;
}

const InputOpinion : React.FC<IOpinion> = ({
  mainText,
  desc,
  onValueChange,
  ...props
}) => {
  return (
  <div className="space-y-1 my-4">
      <Label htmlFor="name">
        {mainText}:
        <span className="mx-2 text-neutral-500 text-sm">
          {desc}
        </span>
      </Label>
      <Select onValueChange={onValueChange} {...props}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="-" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="5">Ótimo</SelectItem>
            <SelectItem value="4">Bom</SelectItem>
            <SelectItem value="3">Regular</SelectItem>
            <SelectItem value="2">Ruim</SelectItem>
            <SelectItem value="1">Péssimo</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default InputOpinion;