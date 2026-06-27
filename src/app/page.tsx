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
                <ScrollStage.PinnedStart>
                    <Hero />
                </ScrollStage.PinnedStart>
                <ScrollStage.Content>
                    <SelectedWork />
                    <Services />
                    <Skills />
                    <Testimonials />
                    <AboutNow />
                    <Contact />
                </ScrollStage.Content>
                <ScrollStage.PinnedEnd>
                    <Footer />
                </ScrollStage.PinnedEnd>
            </ScrollStage>
        </main>
    );
}
