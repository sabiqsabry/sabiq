import { CONTACT } from "@/lib/contact";

type ContactPhoneLinkProps = {
    className?: string;
};

export function ContactPhoneLink({ className }: ContactPhoneLinkProps) {
    return (
        <a href={CONTACT.phoneHref} className={className}>
            {CONTACT.phone}
        </a>
    );
}
