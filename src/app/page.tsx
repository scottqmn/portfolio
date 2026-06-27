import { ScrollStage } from '@/components/ScrollStage';
import {
    AboutNow,
    Contact,
    Footer,
    Hero,
    SelectedWork,
    Services,
    Skills,
    Testimonials,
} from '@/components/sections';

export default function Home() {
    return (
        <main>
            <ScrollStage>
                <ScrollStage.Pinned>
                    <Hero />
                </ScrollStage.Pinned>
                <ScrollStage.Content>
                    <SelectedWork />
                    <Services />
                    <Skills />
                    <Testimonials />
                    <AboutNow />
                    <Contact />
                    <Footer />
                </ScrollStage.Content>
            </ScrollStage>
        </main>
    );
}
