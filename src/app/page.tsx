import { ScrollStage } from '@/components/ScrollStage';
import { Footer, Hero, Employment, Projects } from '@/components/sections';

export default function Home() {
    return (
        <main>
            <ScrollStage>
                <ScrollStage.PinnedStart>
                    <Hero />
                </ScrollStage.PinnedStart>
                <ScrollStage.Content>
                    <Employment />
                    <Projects />
                </ScrollStage.Content>
                <ScrollStage.PinnedEnd className='opacity-0 transition-opacity duration-700 data-[pinned=true]:opacity-100'>
                    <Footer />
                </ScrollStage.PinnedEnd>
            </ScrollStage>
        </main>
    );
}
