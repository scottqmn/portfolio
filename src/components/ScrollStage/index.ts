import { Content } from './Content';
import { PinnedEnd } from './PinnedEnd';
import { PinnedStart } from './PinnedStart';
import { ScrollStageRoot } from './ScrollStage';

export const ScrollStage = Object.assign(ScrollStageRoot, {
    PinnedStart,
    Content,
    PinnedEnd,
});
