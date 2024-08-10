'use client';
import React from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import foodItems from '@/utils/foodiitems';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const FormSchema = z.object({
  count: z.enum(['1', '2'], {
    message: 'Please select the number of meals',
  }),
  type: z.enum(['lunch', 'dinner'], {
    message: 'Please select a meal type',
  }),
  items: z.array(z.string()).refine((value) => value.length > 0, {
    message: 'Please select at least one item',
  }),
});

const { lunch, dinner } = foodItems;

const OrderForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      count: '1',
      type: 'lunch',
      items: [],
    },
  });

  const selectedType = useWatch({
    control: form.control,
    name: 'type',
  });

  const filteredItems = selectedType === 'lunch' ? lunch : dinner;
  const items = filteredItems.map((item, index) => ({
    id: item.id.toString(),
    label: item.label,
  }));

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Your order has been placed!',
      draggable: false,
      duration: 5000,
      variant: 'success',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="count"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Number Of Meals</FormLabel>
              <FormDescription>Nmuber of adult meals.</FormDescription>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="1" />
                    </FormControl>
                    <FormLabel className="font-normal">1</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="2" />
                    </FormControl>
                    <FormLabel className="font-normal">2</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Meal Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="lunch" />
                    </FormControl>
                    <FormLabel className="font-normal">Lunch</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="dinner" />
                    </FormControl>
                    <FormLabel className="font-normal">Dinner</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Items</FormLabel>
                <FormDescription>
                  Select the items to be served.
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value.filter(
                                      (value) => value !== item.id,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit">Schedule Meal</Button>
        </div>
      </form>
    </Form>
  );
};

export default OrderForm;
