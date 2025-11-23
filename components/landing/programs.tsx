// components
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// intl
import { getTranslations } from "next-intl/server";

// motion
import * as motion from "motion/react-client";

// icons
import { BookOpen, Clock, Users } from "lucide-react";

const programs = [
  {
    title: "الماجستير في الهندسة المدنية",
    duration: "سنتان",
    seats: "30 مقعد",
    specializations: ["إنشاءات", "هندسة بيئية", "هندسة النقل والمرور"],
  },
  {
    title: "الماجستير في الهندسة الميكانيكية",
    duration: "سنتان",
    seats: "25 مقعد",
    specializations: ["قوى وطاقة", "تصميم ميكانيكي", "إنتاج"],
  },
  {
    title: "الماجستير في الهندسة الكهربية",
    duration: "سنتان",
    seats: "35 مقعد",
    specializations: ["قوى كهربية", "إلكترونيات", "اتصالات"],
  },
  {
    title: "الدكتوراه في الهندسة المدنية",
    duration: "3-5 سنوات",
    seats: "15 مقعد",
    specializations: ["بحث متقدم", "دراسات تخصصية"],
  },
  {
    title: "الدكتوراه في الهندسة الميكانيكية",
    duration: "3-5 سنوات",
    seats: "12 مقعد",
    specializations: ["بحث متقدم", "دراسات تخصصية"],
  },
  {
    title: "الدكتوراه في الهندسة الكهربية",
    duration: "3-5 سنوات",
    seats: "18 مقعد",
    specializations: ["بحث متقدم", "دراسات تخصصية"],
  },
];

const Programs = async () => {
  // intl
  const t = await getTranslations("programs");

  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("p1")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/50 hover:-translate-y-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <BookOpen className="w-10 h-10 text-accent" />
                    <Badge variant="secondary" className="text-sm">
                      {program.duration}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-foreground leading-tight">
                    {program.title}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">المدة: {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">
                        الأماكن المتاحة: {program.seats}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      التخصصات:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {program.specializations.map((spec, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
