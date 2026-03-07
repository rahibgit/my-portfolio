import { cn } from "../../lib/utils";
import Container from "./Container";
import { motion } from "framer-motion";

export default function Section({ id, className, children, containerClassName }) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <Container className={containerClassName}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
