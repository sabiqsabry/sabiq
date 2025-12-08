import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('https://formsubmit.co/ajax/sabiqsabry48@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name || 'Visitor'}`,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to send');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const testimonials = [
    {
      text: "Sabiq has an incredible ability to translate ideas into reality. His precision, creativity, and commitment made a huge impact on our project.",
      author: "Baraa S.",
      role: "Senior Flutter Developer & Collaborator on DisOccupied"
    },
    {
      text: "Working with Sabiq was a joy. He's fast, reliable, and deeply understands both technical and business perspectives.",
      author: "Aamir A.",
      role: "Educational Consultant at EduGeek"
    },
    {
      text: "A true problem-solver who never compromises on quality. Every product he touches ends up cleaner and more intuitive.",
      author: "Raeed A.",
      role: "Client – PhotoCorner Project"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#DDDBCB]/20 to-[#F5F1E3] dark:from-[#121212]/20 dark:to-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#050505] dark:text-white mb-4 text-center tracking-tight">
            What People Say
          </h2>
          <p className="text-xl text-[#050505]/70 dark:text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Feedback from clients and collaborators I've worked with
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-none bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <p className="text-[#050505]/80 dark:text-white/80 mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-[#DDDBCB] dark:border-white/10 pt-4">
                    <p className="font-semibold text-[#1B9AAA]">{testimonial.author}</p>
                    <p className="text-sm text-[#050505]/60 dark:text-white/60">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050505] dark:text-white mb-6 tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-xl text-[#050505]/70 dark:text-white/70 mb-8 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1B9AAA]/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#1B9AAA]" />
                </div>
                <div>
                  <p className="font-semibold text-[#050505] dark:text-white">Email</p>
                  <a href="mailto:sabiqsabry48@gmail.com" className="text-[#1B9AAA] hover:underline">
                    sabiqsabry48@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1B9AAA]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#1B9AAA]" />
                </div>
                <div>
                  <p className="font-semibold text-[#050505] dark:text-white">Location</p>
                  <p className="text-[#050505]/70 dark:text-white/70">Malaysia & Sri Lanka</p>
                  <p className="text-sm text-[#050505]/60 dark:text-white/60">Open to hybrid/remote roles</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button 
                asChild
                className="bg-[#1B9AAA] hover:bg-[#1B9AAA]/90 text-white transition-all duration-200 hover:scale-105"
              >
                <a href="https://www.linkedin.com/in/sabiqsabry/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="border-[#1B9AAA] text-[#1B9AAA] hover:bg-[#1B9AAA] hover:text-white dark:border-[#1B9AAA] dark:text-[#1B9AAA] transition-all duration-200 hover:scale-105"
              >
                <a href="https://github.com/sabiqsabry" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <Card className="border-none bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#050505] dark:text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-[#DDDBCB] dark:border-white/20 focus:border-[#1B9AAA] focus:ring-[#1B9AAA] bg-white dark:bg-[#050505] text-[#050505] dark:text-white"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-[#DDDBCB] dark:border-white/20 focus:border-[#1B9AAA] focus:ring-[#1B9AAA] bg-white dark:bg-[#050505] text-[#050505] dark:text-white"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-[#DDDBCB] dark:border-white/20 focus:border-[#1B9AAA] focus:ring-[#1B9AAA] resize-none bg-white dark:bg-[#050505] text-[#050505] dark:text-white"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#1B9AAA] hover:bg-[#1B9AAA]/90 text-white py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitStatus === 'success' && (
                  <p className="text-sm text-green-500">
                    Thanks! Your message was sent. I&apos;ll reply soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again or email me directly at sabiqsabry48@gmail.com.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-[#DDDBCB] dark:border-white/10">
          <p className="text-[#050505]/60 dark:text-white/60">
            © 2025 Sabiq Sabry | Built with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;