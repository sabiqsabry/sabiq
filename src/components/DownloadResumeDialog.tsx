import { Download, FileText, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

type DownloadResumeDialogProps = {
  triggerVariant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  triggerClassName?: string;
};

const DownloadResumeDialog = ({
  triggerVariant = 'default',
  triggerClassName,
}: DownloadResumeDialogProps) => {
  const downloads = [
    {
      label: 'Resume with photo',
      description: 'Includes a headshot for a more personal introduction.',
      href: '/resume/sabiq-sabry-resume-picture.pdf',
      icon: ImageIcon,
    },
    {
      label: 'Resume (no photo)',
      description: 'Clean, text version.',
      href: '/resume/sabiq-sabry-resume.pdf',
      icon: FileText,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={triggerVariant}
          className={cn(
            'gap-2 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300',
            triggerClassName
          )}
        >
          <Download className="h-5 w-5" />
          Download Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-8 md:p-12">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl">Choose your resume</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground leading-relaxed whitespace-normal">
            Pick the version you want to download — both are up to date.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-6 sm:grid-cols-2">
          {downloads.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.href}
                asChild
                variant="outline"
                className="h-full w-full justify-start items-start gap-4 border-[#1B9AAA]/30 text-[#050505] dark:text-white hover:bg-[#1B9AAA]/10 dark:hover:bg-[#1B9AAA]/15 py-6 px-6 text-left"
              >
                <a href={item.href} download className="block h-full w-full">
                  <div className="flex items-start gap-4 text-left">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B9AAA]/10 text-[#1B9AAA] shrink-0">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="space-y-1 whitespace-normal">
                      <div className="font-semibold text-lg leading-tight">{item.label}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed whitespace-normal break-words">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </a>
              </Button>
            );
          })}
        </div>
        <DialogFooter className="text-sm text-muted-foreground leading-relaxed">
          Your download will start immediately after you choose an option. Files open in a new tab on some browsers.
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadResumeDialog;

