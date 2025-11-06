import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { countryCodes, type CountryCode } from "@/data/countryCodes";
import { useLanguage } from "@/contexts/LanguageContext";

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function PhoneInput({
  value = "",
  onChange,
  placeholder,
  disabled,
  className,
}: PhoneInputProps) {
  const { language } = useLanguage();
  const [open, setOpen] = React.useState(false);
  
  // Parse the value to extract country code and number
  const parsePhoneValue = (phoneValue: string): { countryCode: string; number: string } => {
    if (!phoneValue) return { countryCode: "+963", number: "" };
    
    // Find matching country code
    const matchedCountry = countryCodes.find(country => 
      phoneValue.startsWith(country.dialCode)
    );
    
    if (matchedCountry) {
      return {
        countryCode: matchedCountry.dialCode,
        number: phoneValue.slice(matchedCountry.dialCode.length).trim(),
      };
    }
    
    // Default to Syria if no match
    return { countryCode: "+963", number: phoneValue };
  };

  const { countryCode, number } = parsePhoneValue(value);
  const [selectedCountry, setSelectedCountry] = React.useState<CountryCode>(
    countryCodes.find(c => c.dialCode === countryCode) || countryCodes[0]
  );
  const [phoneNumber, setPhoneNumber] = React.useState(number);

  // Update parent when values change
  React.useEffect(() => {
    const fullNumber = phoneNumber ? `${selectedCountry.dialCode} ${phoneNumber}` : "";
    if (onChange && fullNumber !== value) {
      onChange(fullNumber);
    }
  }, [selectedCountry, phoneNumber]);

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setOpen(false);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^\d\s-]/g, ""); // Only allow digits, spaces, and hyphens
    setPhoneNumber(newValue);
  };

  return (
    <div className={cn("flex gap-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className="w-[140px] justify-between"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{selectedCountry.flag}</span>
              <span className="text-sm">{selectedCountry.dialCode}</span>
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0" align="start">
          <Command>
            <CommandInput 
              placeholder={language === 'ar' ? 'ابحث عن دولة...' : 'Search country...'} 
            />
            <CommandList>
              <CommandEmpty>
                {language === 'ar' ? 'لم يتم العثور على دولة' : 'No country found'}
              </CommandEmpty>
              <CommandGroup>
                {countryCodes.map((country) => (
                  <CommandItem
                    key={country.code}
                    value={`${country.name} ${country.nameAr} ${country.dialCode}`}
                    onSelect={() => handleCountrySelect(country)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedCountry.code === country.code
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    <span className="mr-2 text-lg">{country.flag}</span>
                    <span className="flex-1">
                      {language === 'ar' ? country.nameAr : country.name}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {country.dialCode}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      
      <Input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder={placeholder || (language === 'ar' ? 'رقم الهاتف' : 'Phone number')}
        disabled={disabled}
        className="flex-1"
        dir="ltr"
      />
    </div>
  );
}
