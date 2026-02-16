"use client";

import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { Typography } from "@/components/atoms/Typography";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/molecules/ScrollAnimation";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mgolklwj");

  if (state.succeeded) {
      return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[60vh] text-center">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8"
                >
                    <Icon name="check" size={40} className="text-green-600" />
                </motion.div>
                <Typography variant="h2" className="mb-4">Mensaje enviado</Typography>
                <Typography variant="body-lg" className="text-neutral-500 max-w-lg mx-auto mb-8">
                    Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá en breve a tu correo electrónico.
                </Typography>
                <Button variant="secondary" onClick={() => window.location.reload()}>
                    Enviar otro mensaje
                </Button>
            </div>
            <Footer />
        </main>
      );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12 md:py-24">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Form Section */}
            <div className="lg:col-span-7">
                <ScrollAnimation variant="fadeUp">
                    <Typography variant="h1" className="mb-6">Hablemos.</Typography>
                </ScrollAnimation>
                <ScrollAnimation variant="fadeUp" delay={0.1}>
                    <Typography variant="body-lg" className="text-neutral-500 mb-12">
                        ¿Tienes dudas sobre Agendia Pro? ¿Interesado en una integración personalizada? Estamos aquí.
                    </Typography>
                </ScrollAnimation>

                <ScrollAnimation variant="fadeUp" delay={0.2}>
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400" htmlFor="name">NOMBRE COMPLETO</label>
                            <Input variant="minimal" id="name" name="name" placeholder="Ej. Juan Pérez" required />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400" htmlFor="email">CORREO ELECTRÓNICO</label>
                            <Input variant="minimal" id="email" type="email" name="email" placeholder="juan@empresa.com" required />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400" htmlFor="message">MENSAJE</label>
                            <Input variant="minimal" id="message" name="message" placeholder="Cuéntanos en qué podemos ayudarte..." required />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <div className="pt-8">
                            <Button type="submit" variant="primary" size="lg" disabled={state.submitting}>
                                {state.submitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                            </Button>
                        </div>
                    </form>
                </ScrollAnimation>
            </div>

            {/* Sidebar Contact Info */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-12 pt-12 lg:pt-0">
                <ScrollAnimation variant="fadeUp" delay={0.3}>
                    <div className="space-y-12">
                         <div>
                             <Typography variant="label" className="mb-4 block">SOPORTE</Typography>
                             <a href="mailto:soporte@agendia.do" className="text-xl font-bold hover:underline">soporte@agendia.do</a>
                        </div>
                         <div>
                             <Typography variant="label" className="mb-4 block">VENTAS</Typography>
                             <a href="mailto:ventas@agendia.do" className="text-xl font-bold hover:underline">ventas@agendia.do</a>
                        </div>
                         <div>
                             <Typography variant="label" className="mb-4 block">UBICACIÓN</Typography>
                             <Typography variant="body" className="font-medium">
                                Santo Domingo, República Dominicana 🇩🇴
                             </Typography>
                        </div>
                    </div>
                </ScrollAnimation>
                
                <ScrollAnimation variant="fadeUp" delay={0.4}>
                    <div className="p-6 bg-neutral-50 rounded-xl border border-black/5">
                        <div className="flex items-center gap-3 mb-4">
                            <Icon name="chat" size={24} />
                            <Typography variant="h4">Chat en vivo</Typography>
                        </div>
                        <Typography variant="body" className="text-sm text-neutral-500 mb-4">
                            Nuestro equipo suele responder en menos de 5 minutos.
                        </Typography>
                        <Button variant="secondary" size="sm" fullWidth onClick={() => window.open(`https://wa.me/18496294289`, "_blank")}>
                            Iniciar Chat
                        </Button>
                    </div>
                </ScrollAnimation>
            </div>

         </div>
      </div>

      <Footer />
    </main>
  );
}
