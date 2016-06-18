## awesome-aframe [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A collection of awesome things regarding [A-Frame](https://github.com/aframevr/aframe), the WebVR framework.

## Table of Contents

- [Official Resources](#official-resources)
- [Community](#community)
- [Learning](#learning)
- [Components](#components)
- [Integration](#integration)
- [Scenes](#scenes)

### Official Resources

Straight from the horse's mouth.

- [Blog](https://aframe.io/blog/)
- [Official Site](https://aframe.io)
- [Team Site](http://mozvr.com)
- [Examples](https://aframe.io/examples/)
- [Codepen](http://codepen.io/team/mozvr/pens/public/)

### Community

Find human beings using A-Frame.

- [Slack](http://aframevr-slack.herokuapp.com/)
- [Twitter](https://twitter.com/aframevr)
- IRC: `irc://irc.mozilla.org:6697/#VR`

### Learning

Learn about A-Frame.

#### Articles

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
- [Building a Simple Web VR UI with A-Frame](https://blog.neondaylight.com/build-a-simple-web-vr-ui-with-a-frame-a17a2d5b484) - Using cursor and components to swap photospheres
- [Lightmapping on the Server](https://medium.com/@bnolan/lightmapping-on-the-server-5485177ef2fa) - Server-side lightmapping with Blender
- [Scene Export](https://medium.com/@bnolan/scene-export-89cc1c985ac8) - Exporting A-Frame-based scenes in SceneVR
- [Using Thingiverse Files in A-Frame](https://medium.com/@bnolan/using-thingiverse-files-in-a-frame-50641ca3f721)

#### Talks and Videos

- [Building a Virtual Reality Web Experience](https://air.mozilla.org/josh-carpenter-building-a-virtual-reality-web-experience/) (by [Josh Carpenter](http://twitter.com/jcarpenter)) - A sneak peek of A-Frame before it was released
- [A Review of Mozilla's A-Frame WebVR Framework](https://www.youtube.com/watch?v=4IqBLoJd0ww) (by [AR/VR Magazine](http://www.arvrmagazine.com/))
- [Responsive Web Design with A-Frame](https://www.youtube.com/watch?v=HogJdsepZRo) (by [@alexrkass])
- [Using A-Frame with Epson Moverio and Crosswalk](https://www.youtube.com/watch?v=Tt-pX1JMt60) (by [Pablo Mendigochea](https://twitter.com/hololeo/)) - Tech talk on building WebVR and VR apps with Crosswalk and A-Frame for the [Epson Moverio](http://www.epson.com/moverio) augmented-reality smart glasses
- [D3 + 3D: Using d3.js with A-Frame](https://www.youtube.com/watch?v=Tb2b5nFmmsM)
- [Build the Virtual Reality Web with A-Frame](https://www.youtube.com/watch?v=f2pu-oMspLs) - Talk on A-Frame at ForwardJS
- [VR on the Open Web with A-Frame and WebVR](http://voicesofvr.com/350-vr-on-the-open-web-with-a-frame-and-webvr/) - Voices of VR podcast featuring Josh Carpenter
- [A-Frame: VR for Developers](https://www.youtube.com/watch?v=wRqoSdPZQBY) - Talk on A-Frame at SFHTML5

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

Third-party components (of the entity-component-system pattern).

- [Component Boilerplate](https://github.com/ngokevin/aframe-component-boilerplate) - Boilerplate for creating and sharing A-Frame VR components
- [aframe-extras](https://github.com/donmccurdy/aframe-extras) - Don's collection of A-Frame components
- [k-frame](https://github.com/donmccurdy/aframe-extras) - Kevin's collection of A-Frame components
- [Along Path](https://jsbin.com/dasefeh/edit?html,output) - Interpolating an entity's position along a path
- [Asset Lazy Load](https://github.com/youmustfight/aframe-asset-lazy-load) - Assign asset loading order and delays
- [Audio Visualizer](https://github.com/ngokevin/aframe-audio-visualizer-components) - Audio visualizations using WebAudio API
- [Broadcast](https://github.com/ngokevin/aframe-broadcast-component) - Multiuser with WebSockets
- [Collider, Explode, Spawner](https://github.com/dmarcos/a-invaders/tree/master/js/components) - Collection of components for collision, geometry explosions, and entity spawning
- [Crease](https://github.com/andreasplesch/aframe-crease-component) - Creased shading
- [Cubemap](https://github.com/bryik/aframe-cubemap-component) - Create a skybox from a cubemap
- [Drag Look](https://github.com/mayognaise/aframe-drag-look-controls-component) - Look controls in the opposite direction with changing cursor style
- [Draw](https://github.com/maxkrieger/aframe-draw-component) - HTML5 `<canvas>` as a material texture, with support for extension components
- [Entity Generator](https://github.com/ngokevin/aframe-entity-generator-component) - Generate entities
- [Event Set](https://github.com/ngokevin/aframe-event-set-component) - Set properties in response to events, replacement for declarative events
- [Extrude and Lathe](https://github.com/JosePedroDias/aframe-extrude-and-lathe) - Extrude and lathe geometries
- [FPS Look](https://github.com/cemkod/aframe-fps-look-component) - Facilitates controlling entity rotation directly with captured mouse
- [Fence](https://github.com/atomicguy/aframe-fence-component) - Set boundaries on entity position
- [Firebase](https://github.com/ngokevin/aframe-firebase-component) - Multiuser with Firebase
- [Fit Texture](https://github.com/nylki/aframe-fit-texture-component) - Automatically scale entities relative to their texture, so you don't need to set width/height manually
- [GIF](https://github.com/gtk2k/gtk2k.github.io/tree/master/animation_gif) - Display GIF as a texture by using a Canvas
- [Gamepad Controls](https://github.com/donmccurdy/aframe-gamepad-controls) - Gamepad controls using HTML5 Gamepad API
- [Grid Helper](https://github.com/dbradleyfl/aframe-gridhelper) - Create customizable grids
- [href](https://github.com/gasolin/aframe-href-component) - Link to other pages using cursor component
- [HTML Texture](https://github.com/scenevr/htmltexture-component) - Using HTML as a texture, powered by html2canvas
- [Interpolation](https://github.com/scenevr/interpolation-component) - Interpolate positional and rotational updates for entities, useful for fetching from server for multiplayer
- [Layout](https://github.com/ngokevin/aframe-layout-component) - 3D layout of child entities
- [Mesh Line](https://github.com/andreasplesch/aframe-meshline-component) - Draw thick lines
- [Mouse Cursor](https://github.com/mayognaise/aframe-mouse-cursor-component) - Use mouse as a direct pointer
- [No-click Look Controls](https://github.com/alexrkass/aframe-no-click-look-controls) - Intuitive desktop view controls without requiring mousedown + drag
- [OBJ and MTL Loader](https://github.com/donmccurdy/aframe-obj-loader-component) - Loader for .OBJ models and .MTL materials
- [Ocean](https://github.com/donmccurdy/aframe-extras/blob/master/src/primitives/a-ocean.js) - Flat-shaded ocean primitive and component, with animated waves
- [Orbit Controls](https://github.com/subsumo/aframe-orbit-controls/) - Orbit camera around an entity
- [Physics](https://github.com/ngokevin/aframe-physics-components) - Rigid-body physics
- [Polygon](https://github.com/andreasplesch/aframe-polygon-primitive) - n-sided polygons
- [Proxy Controls](https://proxy-controls.donmccurdy.com) - Connect input devices from your desktop to your mobile phone with WebRTC
- [Randomizer](https://github.com/ngokevin/aframe-randomizer-components) - Set random values
- [Selectable](https://github.com/scenevr/selectable-component) by [@scenevr](https://www.scenevr.com/)- Click on an entity to select it, handy for editors
- [Star](https://github.com/andreasplesch/aframe-star-component) - 2D stars
- [Stereo](https://github.com/oscarmarinmiro/aframe-stereo-component) - Enable rendering different entities for each eye, using THREE.js layers so you can render 3D stereoscopic videos (full and half-dome)
- [Template](https://github.com/ngokevin/aframe-template-component) - Integration with Handlebars, Jade, mustache, Nunjucks JS template engines
- [Text Wrap](https://github.com/maxkrieger/aframe-textwrap-component) - Wrapping text dynamically rendered onto the `draw` component
- [Text](https://github.com/ngokevin/aframe-text-component) - Polygonal text
- [UI Modal](https://github.com/IdeaSpaceVR/aframe-ui-modal-component) - Show dialog box or a menu in front of the camera
- [Universal Controls](https://github.com/donmccurdy/aframe-extras/tree/master/src/controls/) - Refactored A-Frame controls that supports gamepad, HMD, keyboard, mouse, touch alongside physics
- [Faceset](https://github.com/andreasplesch/aframe-faceset-component) - Geometry from vertices and faces
- [glTF](https://github.com/xirvr/aframe-gltf/) - glTF models
- [Checkpoint Controls](https://github.com/donmccurdy/aframe-extras/blob/master/src/controls/checkpoint-controls.js) - Eased linear locomotion
- [Height Grid](https://github.com/andreasplesch/aframe-heightgrid-component) - Terrain
- [Leap Hands](https://github.com/donmccurdy/aframe-leap-hands) - Leap Motion
- [Particle System](https://github.com/IdeaSpaceVR/aframe-particle-system-component) - Particle systems (e.g., rain, dust, snow, fire)
- [WebVR Controller](https://github.com/richardanaya/aframe-webvr-controller) - HTC Vive controllers
- [Keyboard](https://github.com/richardanaya/aframe-keyboard) - Full VR keyboard for use with WebVR controllers

### Materials

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
- [IdeaSpace](https://github.com/IdeaSpaceVR/IdeaSpace) - IdeaSpace CMS for the virtual reality web

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
- [INFIVERSE](http://infiverse.com/) (by [@drawvr]) Navigate a collection of cool A-Frame sites by walking through rooms and doorways
- [Cardboard Dungeon](https://chrismwaite.github.io/cardboard-dungeon/) (by [Christopher Waite](https://twitter.com/chrismwaite/)) - A first-person dungeon crawler designed for mobile [[Code]](https://github.com/chrismwaite/cardboard-dungeon/)
- [Cardboard Treasure Hunt](https://i3games.github.io/aframe-cardboard-demo/) (by [Michael Straeubig](https://github.com/i3games/)) - An A-Frame implementation of the [Google Cardboard "Treasure Hunt" demo](https://developers.google.com/cardboard/android/get-started">) [[Code]](https://github.com/i3games/aframe-cardboard-demo/)
- [Concert Hall 360°](https://ybinstock.github.io/concert_hall_360/) (by [@ybinstock]) - 360° view of an empty concert hall with Vivaldi’s _The Four Seasons_ playing in the background [[Code]](https://github.com/ybinstock/concert_hall_360)
- [Where in the World Is Carmen Sandiego?](https://ybinstock.github.io/carmensandiego_360/) (by [@ybinstock]) - A scavenger hunt game inspired by the popular series [[Code]](https://github.com/ybinstock/carmensandiego_360/)
- [Monument](https://sandbox.donmccurdy.com/vr/monument/) - [Monument Valley](http://www.monumentvalleygame.com/) scene exported from [MagicaVoxel](https://ephtracy.github.io/) [[Code]](https://github.com/donmccurdy/aframe-extras/blob/master/examples/monument/index.html)
- [Drop](http://drawvr.com/drop/) (by [@drawvr]) - Look down and free-fall
- [Minecraft Viewer Boilerplate](https://ngokevin.github.io/aframe-minecraft-viewer-boilerplate/) - Boilerplate for viewing [Minecraft](http://minecraft.net/)-[esque](http://www.realtimerendering.com/erich/minecraft/public/mineways/) scenes [[Code]](https://github.com/ngokevin/aframe-minecraft-viewer-boilerplate/)
- [Aztec Pong](http://meta-meta.github.io/aztec-pong/) - Play Pong floating atop an Aztec monument [[Code]](https://github.com/meta-meta/aztec-pong/)
- [Hello, Pizza!](http://carpedmt.github.io/) - If a pizza spins in a forest and no one is around to eat it, does it make a sound? [[Code]](https://github.com/carpedmt/carpedmt.github.io/)
- [GadgetPlus VR Online Store](http://vr.gadgetplus.ca/) - Shop in VR for electronics and gifts (by [@drawvr])
- [Lullabot](http://vr.lullabot.com/) - VR teaser page for [Lullabot](https://www.lullabot.com/), an interactive strategy, design, and development company ([P.S. meet the team](http://vr.lullabot.com/team-photo/))
- [Random Forest Treasure Hunt](http://www.utopiavr.io/examples/forest/) - Can you find the red cube? Randomly generated forest built with Handlebars template
- [E-commerce Spy Store](http://vr.ispystore.ca/) - Black & white environment with fire (by [@drawvr])
- [E-commerce Gallery](http://vr.gadgetplus.ca/) - Product gallery in a large well-lit building (by [@drawvr])
- [Living Room](http://drawvr.com/living-room/) - Watch TV from your luxurious living room by the beach (by [@drawvr])
- [Alien Abduction](http://vedm.xyz/abductionvr/) (by [Gabriel de Diego](https://github.com/gdedi001), [Bruno Diaz](https://www.linkedin.com/in/bruno-diaz-265911100), [Joshua Ovieda](https://www.linkedin.com/in/joshua-oviedo-333001117) and [Jose-Rafael Diaz](https://github.com/nowheyjose)) - Alien Abduction demo
- [Hello VR](http://pixelz.de/vr/hellovr/) (by [@PIXELZ]) - Moody dark scene with cool shadows, reflections, and animated clouds
- [32Studios Lounge](http://32studios.magichandsrepair.com/browsertour/lounge/) - Enjoy a lounge with coffee machines, laptops, and VR headsets while grooving to SoundCloud
- [Mars: An Interactive Journey](https://www.washingtonpost.com/video/mars/public/) - Explore Mars in virtual reality. Published by the Washington Post and created by a group at University of Texas at Austin. Read [their thoughts on A-Frame and WebVR](https://developer.washingtonpost.com/pb/blog/post/2016/03/11/vr-for-all/)
- [Subreddit gallery](https://www.scenevr.com/r/aww) - View subreddits as virtual galleries (by [@scenevr])
- [360 Syria](http://360syria.com/) - View the devastation of barrel bombs in Aleppo, Syria. Created in partnership with [AllJunior](http://junior.io) and Amnesty International UK
- [PerspecTV VR Player](http://32studios.magichandsrepair.com/designstudio/2016/03/perspectv-vr-player/) - 360-video VR player that allows you to view any 360-video from the web. Compatible with mobile
- [Escape Game](http://drawvr.com/escape/) - Can you escape? (by [@drawvr])
- [Escape Game 2: The Game](http://drawvr.com/escape/) - Can you escape again? (by [@drawvr])
- [Tron World - Carpet Ride](http://alexoviedo999.github.io/vr-carpet-ride/tron-world/) (by [alexoviedo999](http://alexoviedo999.com))
- [OverWater](http://www.skyislandsvr.com/pages/overwater.html) - SkyIslands VR piece.
- [Voxel Castle](https://www.scenevr.com/scenes/398/view) - Castle created with MagicaVoxel and baked in Blender
- [Monument Valley Castle](https://www.scenevr.com/scenes/397/view) - Another castle created with MagicaVoxel and baked in Blender
- [Lava Cave Game](http://drawvr.com/lava-cave) - Don't touch the lava (by [@drawvr])
- [Castle Game](http://drawvr.com/castle/) (by [@drawvr]) - Hidden doors and gems
- [Electrocat](http://topanga-band.com/electrocat/index.html) - Groove to Topanga's music
- [Island](https://sandbox.donmccurdy.com/vr/island/) - Voxel-based island in the ocean
- [Purple Rain](https://ngokevin.github.io/purple-rain/) - Prince tribute
- [Green Laser Pointer Store](http://vr.greenlaserpointerstore.com/) - Shop for lasers
- [Tiny Hands for Trump](http://tinyhandsfortrump.net/) - Donald Trump parody
- [Starfox](http://ufosnap.com/starfox/) - Fly through a Starfox-themed space
- [Moon Bowling](http://www.anj.fyi/moonbowling/) - Bowling in space with moons
- [Moss March](http://www.skyislandsvr.com/pages/mossmarch.html) - SkyIslandsVR piece on a foggy swamp
- [Space Blob Towers](http://www.skyislandsvr.com/pages/spaceblobtowers.html) - SkyIslandsVR piece on a pointy alien world
- [Carnival Globe Trees](http://www.skyislandsvr.com/pages/carnivalglobetrees.html) - SkyIslandsVR piece with globe-shaped trees
- [A-Brush](http://www.anj.fyi/sculpt/) - Doodle in 3D space with WASD and Cardboard cursor
- [HelloWorldVR](http://georational.github.io/helloWorldVR.html) - Stonehenge after dark
- [May the 4th Be With You](http://rudyjahchan.com/may4th/) - Star Wars
- [Pirate](http://drawvr.com/pirate/) (by [@drawvr]) - Cannon balls, knocking down blocks
- [Mini Golf](http://drawvr.com/minigolf/) (by [@drawvr]) - 9 Holes
- [Welcome to A-Frame](http://drawvr.com/welcome/) (by [@drawvr]) - Quick introduction to A-Frame
- [Photo Sphere Diver](https://www.ideaspacevr.org/themes/web-vr-photo-sphere-diver) (by [IdeaSpace](https://www.ideaspacevr.org/)) - Dive into your photo spheres
- [Sketch VR](https://uniform-futures.github.io/sketch-vr/) (by [@uniformfutures]) - Doodle on paper, take a picture, and view it in VR [[Code]](https://github.com/uniform-futures/sketch-vr/)
- [Celestial Dancers](http://celestial.elliotplant.com/) - An orbital mechanics simulation of celestial bodies
- [Dark Lotus](http://www.skyislandsvr.com/pages/darklotus.html) - Lotus flowers on churning water
- [Aquila VR](http://www.aquilavr.com/) - Mapping of the universe using actual star data
- [Plink](http://drawvr.com/plinko/) - Can you make it into the middle slot?
- [Foosball](http://drawvr.com/foosball/) - Everyone's second favorite tabletop game, with physics
- [Redwood Dusk](http://www.skyislandsvr.com/pages/redwooddusk.html) - Meditate under nature's giants
- [Womynography](http://deenakhattab.com/thesis/womynography.html) - An immersive map-based archive of urban women's experiences in Cairo
- [EVA](http://www.jmvisualcreativity.es/vr_eva/) - Prototype mecha in lava
- [Space Shark Room](http://liooil.neocities.org/VR_webStuff/room+07/room07.html) - Hinduist shark cage in space
- [Metal Gear REX](http://www.jmvisualcreativity.es/vr_metal/) - Return to Shadow Moses. SNAKE!
- [Meditation Orbs](http://www.skyislandsvr.com/pages/meditationorbs.html) - A place to meditate
- [Welcome](http://drawvr.com/welcome/) - To A-Frame
- [Vapor Wave](http://liooil.neocities.org/VR_webStuff/vaporWave.html) - Trippy purgatory room
- [Jump Island](http://www.jmvisualcreativity.es/vr_jump/) - Can you make it to the top?
- [Roof Escape](http://www.jmvisualcreativity.es/vr_roof/) - Parkour!
- [TumbVR](http://tumbvr.herokuapp.com/theonlymagicleftisart) - VR gallery for Tumblr
- [VR Wiki Museum](http://vrwikimuseum.com/wiki/Stegoceras) - Full Wikipedia in VR
- [Where is Piers Morgan Disliked the Most?](http://almossawi.com/aframe-d3-visualization/demo/) - D3 data visualization
- [First Citdael](http://www.skyislandsvr.com/pages/firstcitadel.html) - Citadel with flowing waterfalls
- [Missed Connections](http://armthethinker.github.io/webVR-experiments/5--missed-connections.html) - Visualization of Craigslist "Missed Connections" section

Contributions and suggestions are very welcome. Check out the guidelines and [make a pull request](https://github.com/aframevr/awesome-aframe/edit/master/README.md).

## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)


[@alexrkass]: https://github.com/alexrkass
[@cheapsteak]: https://github.com/cheapsteak/
[@daoshengmu]: https://github.com/daoshengmu
[@dmarcos]: https://github.com/dmarcos
[@drawvr]: https://www.reddit.com/user/drawvr
[@ngokevin]: https://github.com/ngokevin
[@withersc]: https://www.behance.net/chriswithers
[@ybinstock]: http://github.com/ybinstock
[@PIXELZ]: http://pixelz.de/
[@scenevr]: https://www.scenevr.com
[@uniformfutures]: https://github.com/uniform-futures
