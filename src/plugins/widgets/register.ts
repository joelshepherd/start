import { Type } from '../interfaces';
import { registerPlugin } from '../registry';

import { Css, CssSettings } from './css';
import { Font, FontSettings } from './font';
import { Greeting, GreetingSettings } from './greeting';
import { Js, JsSettings } from './js';
import { Links, LinksSettings } from './links';
import { Message, MessageSettings } from './message';
import { LiteratureClock, LiteratureClockSettings } from './literature-clock';
import { Quote, QuoteSettings } from './quote';
import { Reload, ReloadSettings } from './reload';
import { Search, SearchSettings } from './search';
import { Time, TimeSettings } from './time';
import { Todo, TodoSettings } from './todo';
import { Weather, WeatherSettings } from './weather';

registerPlugin({
  key: 'core/widgets/css',
  type: Type.WIDGET,
  title: 'Custom CSS',
  Dashboard: Css,
  Settings: CssSettings,
});

registerPlugin({
  key: 'core/widgets/font',
  type: Type.WIDGET,
  title: 'Font Settings',
  Dashboard: Font,
  Settings: FontSettings,
});

registerPlugin({
  key: 'core/widgets/greeting',
  type: Type.WIDGET,
  title: 'Greeting',
  Dashboard: Greeting,
  Settings: GreetingSettings,
});

registerPlugin({
  key: 'widgets/js',
  type: Type.WIDGET,
  title: 'Custom JS',
  Dashboard: Js,
  Settings: JsSettings,
});

registerPlugin({
  key: 'core/widgets/links',
  type: Type.WIDGET,
  title: 'Quick Links',
  Dashboard: Links,
  Settings: LinksSettings,
});

registerPlugin({
  key: 'core/widgets/message',
  type: Type.WIDGET,
  title: 'Message',
  Dashboard: Message,
  Settings: MessageSettings,
});

registerPlugin({
  key: 'extra/widgets/quote',
  type: Type.WIDGET,
  title: 'Daily Quotes',
  Dashboard: Quote,
  Settings: QuoteSettings,
});

registerPlugin({
  key: 'core/widgets/reload',
  type: Type.WIDGET,
  title: 'Auto Reload',
  Dashboard: Reload,
  Settings: ReloadSettings,
});

registerPlugin({
  key: 'extra/widgets/search',
  type: Type.WIDGET,
  title: 'Search Box',
  Dashboard: Search,
  Settings: SearchSettings,
});

registerPlugin({
  key: 'core/widgets/time',
  type: Type.WIDGET,
  title: 'Time',
  Dashboard: Time,
  Settings: TimeSettings,
});

registerPlugin({
  key: 'widgets/literature-clock',
  type: Type.WIDGET,
  title: 'Literature Clock',
  Dashboard: LiteratureClock,
  Settings: LiteratureClockSettings,
});

registerPlugin({
  key: 'widgets/todo',
  type: Type.WIDGET,
  title: 'Todos',
  Dashboard: Todo,
  Settings: TodoSettings,
});

registerPlugin({
  key: 'extra/widgets/weather',
  type: Type.WIDGET,
  title: 'Weather',
  Dashboard: Weather,
  Settings: WeatherSettings,
});
