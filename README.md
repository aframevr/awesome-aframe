## awesome-aframe [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A collection of awesome things regarding [A-Frame VR](https://github.com/aframevr/aframe). Easily build WebVR experiences.

## Table of Contents

- [Official Resources](#official-resources)
- [Community](#community)
- [Learning](#learning)
- [Components](#components)
- [Integration](#integration)
- [Scenes](#scenes)

### Official Resources

Straight from the horse's mouth.

- [Official Site](https://aframe.io)
- [Blog](https://aframe.io/blog/)
- [Team Site](http://mozvr.com)
- [Examples](https://aframe.io/examples/)
- [Codepen](http://codepen.io/team/mozvr/pens/public/)

### Community

Find human beings using A-Frame.

- [Slack](http://aframevr-slack.herokuapp.com/)
- [Twitter](https://twitter.com/aframevr)
- IRC: `irc://irc.mozilla.org:6697/#VR`

### Learning

Learn how to use A-Frame.

#### Guides and Tutorials

- [A-Frame - Virtual Reality on the Web Simplified](http://ngokevin.com/blog/aframe)
- [Hands-on With Virtual Reality Using A-Frame, React and Redux](https://medium.com/immersion-for-the-win/hands-on-with-virtual-reality-using-a-frame-react-and-redux-bc66240834f7#.nce7sfdzl)
- [Schneller Einstieg in die WebVR Entwicklung mit A-Frame](http://thevrjump.com/de/aframe-einstieg) (German) - [Translated](https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=http%3A%2F%2Fthevrjump.com%2Fde%2Faframe-einstieg)
- [WebVR mit A-Frame: Einführung & Grundlagen](http://thevrjump.com/de/aframe-grundlagen) (German) - [Translated](https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=http%3A%2F%2Fthevrjump.com%2Fde%2Faframe-grundlagen)
- [Introduction to A-Frame](http://www.slideshare.net/ellisonmu/introduction-to-aframe-57170744) - Slides from talk at Mozilla Taipei (by [@daoshengmu])
- [Build the Virtual Reality Web with A-Frame](http://www.slideshare.net/MozVR/build-the-virtual-reality-web-with-aframe/) - Slides from talk at ForwardJS (by [@ngokevin])
- [Build a Simple First-Person-Shooter Using Components](https://hacks.mozilla.org/2016/03/build-the-virtual-reality-web-with-a-frame/) - Mozilla Hacks post showing off an entity-component-system pattern workflow to build an interactive scene
- [Relative Positioning in A-Frame](https://medium.com/immersion-for-the-win/relative-positioning-in-a-frame-d839fc0e3249) - How to use `<a-entity>` as a wrapper to create local coordinate spaces
- [Building Cardboard Dungeon with A-Frame](https://hacks.mozilla.org/2016/03/building-cardboard-dungeon-with-a-frame/) - A case study on building a simple dungeon game usign A-Frame
- [A-Frame: The Easiest Way to Bring VR to the Web Today](http://www.sitepoint.com/a-frame-the-easiest-way-to-bring-vr-to-the-web-today/) - Getting started on WebVR with A-Frame
- [A-Frame 0.2.0 - The Extensible VR Web](https://hacks.mozilla.org/2016/03/a-frame-0-2-0-the-extensible-vr-web/) - Release of A-Frame 0.2.0

#### Videos

- ["Building a Virtual Reality Web Experience"](https://air.mozilla.org/josh-carpenter-building-a-virtual-reality-web-experience/) (by [Josh Carpenter](http://twitter.com/jcarpenter)) - A sneak peek of A-Frame before it was released
- ["A Review of Mozilla's A-Frame WebVR Framework"](https://www.youtube.com/watch?v=4IqBLoJd0ww) (by [AR/VR Magazine](http://www.arvrmagazine.com/))
- ["Responsive Web Design with A-Frame"](https://www.youtube.com/watch?v=HogJdsepZRo) (by [@alexrkass])
- ["Using A-Frame with Epson Moverio and Crosswalk"](https://www.youtube.com/watch?v=Tt-pX1JMt60) (by [Pablo Mendigochea](https://twitter.com/hololeo/)) - Tech talk on building WebVR and VR apps with Crosswalk and A-Frame for the [Epson Moverio](http://www.epson.com/moverio) augmented-reality smart glasses
- ["D3 + 3D: Using d3.js with A-Frame"](https://www.youtube.com/watch?v=Tb2b5nFmmsM)

#### Entity-Component-System (ECS)

Learn about the entity-component-system pattern which A-Frame is based on.

- [Entity Systems Wiki](http://entity-systems.wikidot.com/)
- [Wikipedia Entry](https://en.wikipedia.org/wiki/Entity_component_system)
- [How A-Frame is Different from Other 3D Markup Languages](http://ngokevin.com/blog/aframe-vs-3dml/)
- [Das Objekt-Komponenten System von A-Frame verstehen](http://thevrjump.com/de/aframe-system) (German) - [Translated](https://translate.google.com/translate?sl=auto&tl=en&js=y&prev=_t&hl=en&ie=UTF-8&u=http%3A%2F%2Fthevrjump.com%2Fde%2Faframe-system&edit-text=)
- [Eigene Komponenten für A-Frame programmieren](http://thevrjump.com/de/aframe-komponenten) (German) - [Translated](https://translate.google.com/translate?sl=auto&tl=en&js=y&prev=_t&hl=en&ie=UTF-8&u=http%3A%2F%2Fthevrjump.com%2Fde%2Faframe-komponenten&edit-text=)
- [Kommunikation zwischen A-Frame und JavaScript](http://thevrjump.com/de/aframe-js) (German) - [Translated](https://translate.google.com/translate?sl=auto&tl=en&js=y&prev=_t&hl=en&ie=UTF-8&u=http%3A%2F%2Fthevrjump.com%2Fde%2Faframe-js&edit-text=)
- [How to Write an A-Frame VR Component](http://ngokevin.com/blog/aframe-component/)

### Components

Third-party A-Frame components (of the entity-component-system pattern).

- [Component Boilerplate](https://github.com/ngokevin/aframe-component-boilerplate) - Boilerplate for creating and sharing A-Frame VR components
- [Along Path](https://jsbin.com/dasefeh/edit?html,output) - Interpolating an entity's position along a path
- [Extrude and Lathe](https://github.com/JosePedroDias/aframe-extrude-and-lathe) - Extrude and lathe geometries
- [FPS Look](https://github.com/cemkod/aframe-fps-look-component) - Facilitates controlling entity rotation directly with captured mouse
- [Gamepad Controls](https://github.com/donmccurdy/aframe-gamepad-controls) - Gamepad controls using HTML5 Gamepad API
- [Layout](https://github.com/ngokevin/aframe-layout-component) - 3D layout of child entities
- [No-click Look Controls](https://github.com/alexrkass/aframe-no-click-look-controls) - Intuitive desktop view controls without requiring mousedown + drag
- [OBJ and MTL Loader](https://github.com/donmccurdy/aframe-obj-loader-component) - Loader for .OBJ models and .MTL materials
- [Physics](https://github.com/ngokevin/aframe-physics-components) - Rigid-body physics
- [Proxy Controls](https://proxy-controls.donmccurdy.com) - Connect input devices from your desktop to your mobile phone with WebRTC
- [Text](https://github.com/ngokevin/aframe-text-component) - Polygonal text
- [Collider, Explode, Spawner](https://github.com/dmarcos/a-invaders/tree/master/js/components) - Collection of components for collision, geometry explosions, and entity spawning
- [Asset Lazy Load](https://github.com/youmustfight/aframe-asset-lazy-load) - Assign asset loading order and delays
- [Draw](https://github.com/maxkrieger/aframe-draw-component) - HTML5 `<canvas>` as a material texture, with support for extension components
- [Text Wrap](https://github.com/maxkrieger/aframe-textwrap-component) - Wrapping text dynamically rendered onto the `draw` component
- [Template](https://github.com/ngokevin/aframe-template-component) - Integration with Handlebars, Jade, mustache, Nunjucks JS template engines
- [Stereo](https://github.com/oscarmarinmiro/aframe-stereo-component) - Enable rendering different entities for each eye, using THREE.js layers so you can render 3D stereoscopic videos (full and half-dome)
- [GIF](https://github.com/gtk2k/gtk2k.github.io/tree/master/animation_gif) - Display GIF as a texture by using a Canvas
- [Interpolation](https://github.com/scenevr/interpolation-component) - Interpolate positional and rotational updates for entities, useful for fetching from server for multiplayer
- [HTML Texture](https://github.com/scenevr/htmltexture-component) - Using HTML as a texture, powered by html2canvas
- [Selectable](https://github.com/scenevr/selectable-component) by [@scenevr](https://www.scenevr.com/)- Click on an entity to select it, handy for editors
- [Orbit Controls](https://github.com/subsumo/aframe-orbit-controls/) - Orbit camera around an entity
- [Universal Controls](https://github.com/donmccurdy/aframe-extras/tree/master/src/controls/) - Refactored A-Frame controls that supports gamepad, HMD, keyboard, mouse, touch alongside physics
- [Randomizer](https://github.com/ngokevin/aframe-randomizer-components) - Set random values
- [Mesh Line](https://github.com/andreasplesch/aframe-meshline-component) - Draw thick lines
- [Fence](https://github.com/atomicguy/aframe-fence-component) - Set boundaries on entity position
- [Mouse Cursor](https://github.com/mayognaise/aframe-mouse-cursor-component) - Use mouse as a direct pointer
- [Drag Look](https://github.com/mayognaise/aframe-drag-look-controls-component) - Look controls in the opposite direction with changing cursor style

### Shaders

- [Draw](https://github.com/mayognaise/aframe-draw-shader) - Render from canvas
- [HTML](https://github.com/mayognaise/aframe-html-shader) - Render from HTML
- [Video](https://github.com/mayognaise/aframe-video-shader) - iOS-compatible video material
- [GIF](https://github.com/mayognaise/aframe-gif-shader) - Render animated GIFs

### Integration

Integration with existing tools, frameworks, and libraries.

- [aframe-jade-boilerplate](https://github.com/KevinGrandon/aframe-jade-boilerplate) - A-Frame with the Jade templating engine
- [aframe-role](https://github.com/Popmotion/aframe-role) - A-Frame with Popmotion for animations, physics, and input tracking
- [D3.js](http://blockbuilder.org/enjalot/1fd196cd99f8d58a56d3) - A-Frame with D3.js [[Video Tutorial]](https://www.youtube.com/watch?v=Tb2b5nFmmsM)
- [Vue.js + TweenMax demo](http://codepen.io/cheapsteak/pen/dGXZjx?editors=101) (by [@cheapsteak]) - Example of A-Frame with Vue.js for reactive components
- [aframe-templating-examples](https://github.com/ngokevin/aframe-templating-examples) - A-Frame with templating engines such as Handlebars, mustache, Nunjucks
- [SpineFrame](https://github.com/JoshGalvin/SpineFrame/) - Component for 2D sprite animation with [Spine](http://esotericsoftware.com/)
- [Meteor](https://github.com/vladbalan/meteor-aframe) - A-Frame with [Meteor](https://www.meteor.com/), a JavaScript app framework
- [Altspace](https://github.com/AltspaceVR/aframe-altspace-component) - Integration with AltspaceVR

#### [React](https://github.com/facebook/react)

Use React with A-Frame. Share your A-Frame React Components!

- [aframe-react](https://github.com/ngokevin/aframe-react)
- [aframe-react-boilerplate (with Webpack)](https://github.com/ngokevin/aframe-react-boilerplate)
- [aframe-react-starter](https://github.com/fouad/aframe-react-starter)
- [React + Redux Demo (including switching between 2D and 3D)](https://github.com/RSpace/aframe-meetup-example)
- [React + TweenMax Demo](http://codepen.io/cheapsteak/pen/pgbdGa?editors=001) (by [@cheapsteak])

### Scenes

- [a-invaders](http://swimminglessonsformodernlife.com/a-invaders/) - Space invaders game [[Code]](https://github.com/dmarcos/a-invaders)
- [a-wakens](https://ngokevin.github.com/a-wakens) - Star Wars Audio Visualization [[Code]](https://github.com/ngokevin/a-wakens)
- [VR Website Navigation](http://drawvr.com/) (by [@drawvr])
- [Tron-Inspired VR Website Experience](http://drawvr.com/tron/) (by [@drawvr])
- [Minecraft-Inspired VR Website Experience](http://drawvr.com/minecraft/) (by [@drawvr])
- [Movie Theater](http://drawvr.com/theater/) (by [@drawvr])
- [EEVO](http://mhansen-dev.eevo.nyc/) - 360-degree image with transitions
- [Hershey Sweet Lights](https://htmlpreview.github.io/?https://github.com/davexoxide/sweet-lights/blob/master/index.html) - Holiday scene [[Code]](https://github.com/davexoxide/sweet-lights/)
- [MeetupVR](http://immersionftw.com/meetup-vr) - Switching interaction between 2D and 3D [[Code]](https://github.com/RSpace/aframe-meetup-example) [[Post]](https://medium.com/immersion-for-the-win/hands-on-with-virtual-reality-using-a-frame-react-and-redux-bc66240834f7)
- [Ricoh Theta S Live Preview](https://gtk2k.github.io/aframe_theta_s_live_preview/livepreview.html) - Live video preview with the Ricoh Theta S [[Code]](https://github.com/gtk2k/gtk2k.github.io/tree/master/aframe_theta_s_live_preview)
- [threeschwifty](https://ngokevin.github.com/threeschwifty) - 360-degree photo and video viewer [[Code]](https://github.com/ngokevin/threeschwifty)
- [VR GIF](http://x627.com/vr-gif/) - GIFs in VR [[Post]](http://x627.com/a-frame-is-awesome/)
- [Virtual Art School Tour](http://stampswebdesign.com/withersc/hud/index.html) (by [@withersc]) - Tour of the [Stamps School of Art & Design](http://stamps.umich.edu/), built using 360-degree photos with a navigation carousel
- [360-Degree Photosphere Viewer](https://www.ideaspacevr.org/examples/aframe/aframe-360-degree-photosphere) - 360-degree photo viewer with navigation [[Code]](https://github.com/IdeaSpaceVR/aframe-360-degree-photosphere)
- [Space-themed E-commerce Store](http://vr.lasershop.ca/) (by [@drawvr])
- [Tunnel Ride](http://drawvr.com/tunnel/) (by [@drawvr])
- [Wheel Ride](http://drawvr.com/wheel/) (by [@drawvr])
- [Equalizer Ride](http://drawvr.com/equalizer/) (by [@drawvr])
- [Test Scape](http://x627.com/testscape/) (by [Michael Verdi](http://x627.com/directory/))
- [INFIVERSE](http://infiverse.com/) (by [@drawvr]) Navigate a collection of cool A-Frame sites by walking through rooms and doorways (by [@drawvr])
- [Cardboard Dungeon](https://chrismwaite.github.io/cardboard-dungeon/) (by [Christopher Waite](https://twitter.com/chrismwaite/)) - A first-person dungeon crawler designed for mobile [[Code]](https://github.com/chrismwaite/cardboard-dungeon/)
- [Cardboard Treasure Hunt](https://i3games.github.io/aframe-cardboard-demo/) (by [Michael Straeubig](https://github.com/i3games/)) - An A-Frame implementation of the [Google Cardboard "Treasure Hunt" demo](https://developers.google.com/cardboard/android/get-started">) [[Code]](https://github.com/i3games/aframe-cardboard-demo/)
- [Concert Hall 360°](https://ybinstock.github.io/concert_hall_360/) (by [@ybinstock]) - 360° view of an empty concert hall with Vivaldi’s _The Four Seasons_ playing in the background [[Code]](https://github.com/ybinstock/concert_hall_360)
- [Where in the World Is Carmen Sandiego?](https://ybinstock.github.io/carmensandiego_360/) (by [@ybinstock]) - A scavenger hunt game inspired by the popular series [[Code]](https://github.com/ybinstock/carmensandiego_360/)
- [Monument](https://sandbox.donmccurdy.com/vr/monument/) - [Monument Valley](http://www.monumentvalleygame.com/) scene exported from [MagicaVoxel](https://ephtracy.github.io/) [[Code]](https://github.com/donmccurdy/aframe-extras/blob/master/examples/monument/index.html)
- [Drop](http://drawvr.com/drop/) (by [@drawvr]) - Look down and free-fall
- [Minecraft Viewer Boilerplate](https://ngokevin.github.io/aframe-minecraft-viewer-boilerplate/) - Boilerplate for viewing [Minecraft](http://minecraft.net/)-[esque](http://www.realtimerendering.com/erich/minecraft/public/mineways/) scenes [[Code]](https://github.com/ngokevin/aframe-minecraft-viewer-boilerplate/)
- [Aztec Pong](http://meta-meta.github.io/aztec-pong/) - Play Pong floating atop an Aztec monument [[Code]](https://github.com/meta-meta/aztec-pong/)
- [Hello, Pizza!](http://carpedmt.github.io/) - If a pizza spins in a forest and no one is around to eat it, does it make a sound? [[Code]](https://github.com/carpedmt/carpedmt.github.io/)
- [GadgetPlus VR online store](http://vr.gadgetplus.ca/) (by [@drawvr]) - shop in VR for electronics and gifts
- [Lullabot](http://vr.lullabot.com/) - VR teaser page for [Lullabot](https://www.lullabot.com/), an interactive strategy, design, and development company ([P.S. meet the team](http://vr.lullabot.com/team-photo/))
- [Random Forest Treasure Hunt](http://www.utopiavr.io/examples/forest/) - Can you find the red cube? Randomly generated forest built with Handlebars template
- [E-commerce Spy Store](http://vr.ispystore.ca/) (by [@drawvr]) - Black & white environment with fire
- [E-commerce Gallery](http://vr.gadgetplus.ca/) (by [@drawvr]) - Product gallery in a large well-lit building
- [Living Room](http://drawvr.com/living-room/) (by [@drawvr]) - Watch TV from your luxurious living room by the beach
- [Alien Abduction](http://vedm.xyz/abductionvr/) (by [Gabriel de Diego](https://github.com/gdedi001), [Bruno Diaz](https://www.linkedin.com/in/bruno-diaz-265911100), [Joshua Ovieda](https://www.linkedin.com/in/joshua-oviedo-333001117) and [Jose-Rafael Diaz](https://github.com/nowheyjose)) - Alien Abduction demo
- [Hello VR](http://pixelz.de/vr/hellovr/) (by [@PIXELZ]) - Moody dark scene with cool shadows, reflections, and animated clouds
- [32Studios Lounge](http://32studios.magichandsrepair.com/browsertour/lounge/) - Enjoy a lounge with coffee machines, laptops, and VR headsets while grooving to SoundCloud
- [Mars: An Interactive Journey](https://www.washingtonpost.com/video/mars/public/) - Explore Mars in virtual reality. Published by the Washington Post and created by a group at University of Texas at Austin. Read [their thoughts on A-Frame and WebVR](https://developer.washingtonpost.com/pb/blog/post/2016/03/11/vr-for-all/)
- [Subreddit gallery](https://www.scenevr.com/r/aww) (by [@scenevr](https://www.scenevr.com/)) - View subreddits as virtual galleries
- [360 Syria](http://360syria.com/) - View the devastation of barrel bombs in Aleppo, Syria. Created in partnership with [AllJunior](http://junior.io) and Amnesty International UK
- [PerspecTV VR Player](http://32studios.magichandsrepair.com/designstudio/2016/03/perspectv-vr-player/) - 360-video VR player that allows you to view any 360-video from the web. Compatible with mobile
- [Escape Game](http://drawvr.com/escape/) (by [@drawvr]) - Can you escape?
- [Escape Game 2: The Game](http://drawvr.com/escape/) (by [@drawvr]) - Can you escape again?
- [Tron World - Carpet Ride](http://alexoviedo999.github.io/vr-carpet-ride/tron-world/) (by [alexoviedo999](http://alexoviedo999.com))
- [SkyIslands VR](http://www.skyislandsvr.com/pages/overwater.html) - Floating islands over water
- [Voxel Castle](https://www.scenevr.com/scenes/398/view) - Castle created with MagicaVoxel and baked in Blender
- [Monument Valley Castle](https://www.scenevr.com/scenes/397/view) - Another castle created with MagicaVoxel and baked in Blender

Your contributions and suggestions are heartily welcome. Check out the guidelines and [make a pull request](https://github.com/aframevr/awesome-aframe/edit/master/README.md).

## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)


[@alexrkrass]: https://github.com/alexrkass
[@cheapsteak]: https://github.com/cheapsteak/
[@daoshengmu]: https://github.com/daoshengmu
[@drawvr]: https://www.reddit.com/user/drawvr
[@ngokevin]: https://github.com/ngokevin
[@withersc]: https://www.behance.net/chriswithers
[@ybinstock]: http://github.com/ybinstock
[@PIXELZ]: http://pixelz.de/
