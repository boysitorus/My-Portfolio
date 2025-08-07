import { Facebook, Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In<span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mid or want to collaborate? Feel free to reach out. I'm always open to discuss new opportunities.
        </p>

        <div className="grid grid-cols-1 gap-12">
          <div class="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex justify-center items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:sitorusboy0123@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sitorusboy0123@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex justify-center items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Toba, North Sumatra, Indonesia
                  </a>
                </div>
              </div>
            </div>

            <div class="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div class="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/sitoruszs/"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/boyy-sitorus/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/boyy.sitorus/"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
