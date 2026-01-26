import React from 'react';
import { cn } from '@/utils/cn';
import { IconBrandLinkedin, IconBrandInstagram, IconBrandReddit, IconBrandCodepen } from '@tabler/icons-react';
import Link from 'next/link';

interface SocialItem {
  label: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

const items: SocialItem[] = [
  {
    label: 'LinkedIn',
    icon: <IconBrandLinkedin className="h-8 w-8 text-neutral-700 dark:text-neutral-200" />,
    href: '#',
    className: 'lg:col-span-1',
  },
  {
    label: 'Instagram',
    icon: <IconBrandInstagram className="h-8 w-8 text-neutral-700 dark:text-neutral-200" />,
    href: '#',
    className: 'lg:col-span-2',
  },
  {
    label: 'Reddit',
    icon: <IconBrandReddit className="h-8 w-8 text-neutral-700 dark:text-neutral-200" />,
    href: '#',
    className: 'lg:col-span-3',
  },
  {
    label: 'CodePen',
    icon: <IconBrandCodepen className="h-8 w-8 text-neutral-700 dark:text-neutral-200" />,
    href: '#',
    className: 'lg:col-span-4',
  },
];

export const SocialGrid = () => {
  return (
    <div className="w-full max-w-[722px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-200",
              item.className
            )}
          >
            {item.icon}
            <span className="mt-2 font-medium text-neutral-700 dark:text-neutral-200">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
