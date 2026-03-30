import { useState } from "react"
import { Input } from "@ui-v3/input"
import { Textarea } from "@ui-v3/textarea"
import { Label } from "@ui-v3/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui-v3/select"
import { Checkbox } from "@ui-v3/checkbox"
import { RadioGroup, RadioGroupItem } from "@ui-v3/radio-group"
import { Switch } from "@ui-v3/switch"
import { Slider } from "@ui-v3/slider"

export function InputShowcase() {
  const [sliderValue, setSliderValue] = useState([40])
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-on-surface">Inputs & Forms</h2>
        <p className="mt-1 text-sm text-muted-foreground">Form controls for user input.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="text-input">Text Input</Label>
          <Input id="text-input" placeholder="Enter text..." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="disabled-input">Disabled Input</Label>
          <Input id="disabled-input" placeholder="Disabled" disabled />
        </div>

        <div className="space-y-2">
          <Label htmlFor="textarea">Textarea</Label>
          <Textarea id="textarea" placeholder="Enter longer text..." rows={3} />
        </div>

        <div className="space-y-2">
          <Label>Select</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label>Checkboxes</Label>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox id="check1" defaultChecked />
              <Label htmlFor="check1">Checked by default</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="check2" />
              <Label htmlFor="check2">Unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="check3" disabled />
              <Label htmlFor="check3" className="opacity-50">Disabled</Label>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Radio Group</Label>
          <RadioGroup defaultValue="option1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option1" id="r1" />
              <Label htmlFor="r1">Option 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option2" id="r2" />
              <Label htmlFor="r2">Option 2</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option3" id="r3" />
              <Label htmlFor="r3">Option 3</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Switch</Label>
          <div className="flex items-center gap-3">
            <Switch
              id="switch1"
              checked={switchOn}
              onCheckedChange={setSwitchOn}
            />
            <Label htmlFor="switch1">{switchOn ? "On" : "Off"}</Label>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Slider — Value: {sliderValue[0]}</Label>
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            min={0}
            max={100}
            step={1}
          />
        </div>
      </div>
    </section>
  )
}
