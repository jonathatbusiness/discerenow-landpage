import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useI18n } from "../i18n";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Sections.css";
import "./GallerySection.css";

const imageSources = [
  "/gallery-image-1.png",
  "/gallery-image-2.png",
  "/gallery-image-3.png",
  "/gallery-image-4.png",
  "/gallery-image-5.png",
  "/gallery-image-6.png",
];

export default function GallerySection() {
  const { t } = useI18n();

  return (
    <section id="gallery" className="dn-section dn-section-soft">
      <motion.div className="dn-section-header" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="dn-section-kicker">{t.gallery.kicker}</span>
        <h2 className="dn-section-title">{t.gallery.title}</h2>
        <p className="dn-section-text">{t.gallery.description}</p>
      </motion.div>

      <motion.div className="dn-gallery-carousel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Swiper modules={[Navigation, Pagination]} spaceBetween={32} slidesPerView={1} centeredSlides={true} loop={true} navigation={true} pagination={{ clickable: true }} className="dn-swiper">
          {imageSources.map((src, index) => (
            <SwiperSlide key={src}>
              <div className="dn-gallery-card">
                <img src={src} alt="DiscereNow course interface example" />
                <div className="dn-gallery-caption">{t.gallery.images[index]}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
