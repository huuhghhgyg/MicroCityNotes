if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const c=e=>a(e,d),b={module:{uri:d},exports:r,require:c};s[d]=Promise.all(f.map((e=>b[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1.1_what_microcity_can_do.html-cca5cb01.js",revision:"0ab7378c0495d0df88d1b2bee90405ff"},{url:"assets/1.1_what_microcity_can_do.html-d3fd15f7.js",revision:"8f750c082d8f3eb7c674751c05f51f84"},{url:"assets/2.1_showing_a_world_map.html-56e24b63.js",revision:"d6e4ab1e690053e3944dab0c0973a9ca"},{url:"assets/2.1_showing_a_world_map.html-9673d0e4.js",revision:"665611c66c4cb5c341535a482fb1f274"},{url:"assets/2.2_searching_for_countries.html-a5a39909.js",revision:"f8f96d4a976e48583e5343c3feb1aee7"},{url:"assets/2.2_searching_for_countries.html-bada61ab.js",revision:"9fb7a3dfc403976b6afefc09d8d0a9d6"},{url:"assets/3.1_ui_overview.html-3822c775.js",revision:"b5d49db3a3f5119a66560f69bf55d151"},{url:"assets/3.1_ui_overview.html-bed89972.js",revision:"ee3d56f035b2c4360ef3952ae700b171"},{url:"assets/3.2_vector_shapes.html-5a0b610a.js",revision:"970c62430eea250a03527091561f4a42"},{url:"assets/3.2_vector_shapes.html-97111062.js",revision:"d7bfa7d459fc73bdd06a7155c0097548"},{url:"assets/3.3_raster_grids.html-25673158.js",revision:"194312868ad013d1f7ea745d74fa903c"},{url:"assets/3.3_raster_grids.html-e869cf0b.js",revision:"5edb00b8304d4ac6a38f925db92662cd"},{url:"assets/3.4_3d_scenes.html-aeeb4057.js",revision:"953f8c6d318f15f99586c8d905f9e33a"},{url:"assets/3.4_3d_scenes.html-cb326aaa.js",revision:"b156765cc75d445563904375287def63"},{url:"assets/3.5_tables.html-1edde9ad.js",revision:"ef34ac153ff574ac79f70c8062f563e3"},{url:"assets/3.5_tables.html-d2ea90a4.js",revision:"11b1bbc88d8ef0b40f463ad1c8ca8ce3"},{url:"assets/3.6_maps_and_layers.html-3be60476.js",revision:"c91d1546445358d73abca7b793739cd4"},{url:"assets/3.6_maps_and_layers.html-72f57373.js",revision:"4b94ef944299088d43f0aae1884cf5df"},{url:"assets/3.7_modules.html-63c9b143.js",revision:"984b9c1fdea0fa4d2abf48fba1a37df9"},{url:"assets/3.7_modules.html-f443d950.js",revision:"3b8c7fddeef042d26f70ccddf52a4e86"},{url:"assets/4.1_si_overview.html-29a2436a.js",revision:"f2e7620ea6933c9b592c59d9a7483010"},{url:"assets/4.1_si_overview.html-ba3b9836.js",revision:"02d2ef2ac8115b345d80c74d576436b3"},{url:"assets/4.2_ui_control.html-01364891.js",revision:"e700b2ad44dfe0836ae6e8109910d9d8"},{url:"assets/4.2_ui_control.html-0a41e4b6.js",revision:"c05f9e6bcb915d02bcde954cb9fe0f99"},{url:"assets/4.3_shapes_and_tables.html-55efe0d4.js",revision:"ed61b01ec19780188349dfd95daef44f"},{url:"assets/4.3_shapes_and_tables.html-77f32ed8.js",revision:"75d2b7ae6cf0a33787d4633efcdfab99"},{url:"assets/4.4_grids.html-f8672e20.js",revision:"c3b71f04c9bd5f0cde5524671710fcc8"},{url:"assets/4.4_grids.html-fdeb57be.js",revision:"ce5cfcda8748fec5650c6d221c17f093"},{url:"assets/4.5_3d_scenes.html-0a901340.js",revision:"d8976a7c4da55861764c001ea39bf482"},{url:"assets/4.5_3d_scenes.html-3fd85ffe.js",revision:"21b58813c88f5e07e936df8cc768f170"},{url:"assets/4.6_networks.html-68f3fc6f.js",revision:"25ed8d277e688a146542145a73d02636"},{url:"assets/4.6_networks.html-e41b725c.js",revision:"4fd7a53a6c44170f856c4a2afccb7a22"},{url:"assets/4.7_des_simulations.html-2397056a.js",revision:"bdaf2f112c70809ffebdd35c129f9817"},{url:"assets/4.7_des_simulations.html-3e37a6a5.js",revision:"b422b32de1f64841ced212359926d055"},{url:"assets/4.8_mixed_integer_programming.html-44ab7c45.js",revision:"7ffa2a018a336ee7060aa9a589496f19"},{url:"assets/4.8_mixed_integer_programming.html-970f5262.js",revision:"ef3f0fe8cd7770f1543c6332ef87570c"},{url:"assets/404.html-36b315f9.js",revision:"4c2cf877a690a16bfe1ead23f8478a26"},{url:"assets/404.html-510eecfe.js",revision:"d9d8bbe4476db75f55602a872936c43a"},{url:"assets/A2hs-bdd4f6aa.js",revision:"df28010e46a672db11efd7e78f1902dd"},{url:"assets/app-1d0a02ec.js",revision:"342be1ef7a5ee182b48d57f5c5c59cbc"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/button_3d-050223f5.js",revision:"b1d87c2188190dc8f9ad758ff3209930"},{url:"assets/button_action-ad2061de.js",revision:"a45c2da3625b69f983ea2f3f250ed37f"},{url:"assets/button_load-ad8cb86f.js",revision:"391a5543a75ec54a6c326b181f2841e4"},{url:"assets/framework-31ef5388.js",revision:"300149901332d5b65058b023d6771e6a"},{url:"assets/giscus-6650c2d9.js",revision:"282a7cb29f6aabbebb5de1c42a089f2c"},{url:"assets/icon_microcity-478542b8.js",revision:"0e7e05a07396d393fc7977851d9d6556"},{url:"assets/icon_module-5fb09e4d.js",revision:"927274ea2b678bc32f744ed0e157301f"},{url:"assets/icon_script_editor-51788c73.js",revision:"2a9329638f5d3bdd769734a539f336b3"},{url:"assets/icon_shapes_polygon-0fc7a949.js",revision:"780fc09847b268c582be5334dce3ca5f"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-0b2f44bd.js",revision:"004053d5b85b02412fa950203c1dd622"},{url:"assets/index.html-3e525e64.js",revision:"fcf89bb69138117d4953396b272bc1c9"},{url:"assets/index.html-4daf3566.js",revision:"35dcfcd0163647f6c4e88df951ecdfcb"},{url:"assets/index.html-b18b74fd.js",revision:"e0173cc7b6b4369c18e2ed850ad7b5a3"},{url:"assets/index.html-c227b127.js",revision:"04729a152c82c10ede075062d418d9ba"},{url:"assets/index.html-c278a9ac.js",revision:"25c6b3e0c13846869c4c1eacba935ecf"},{url:"assets/index.html-cf867437.js",revision:"d34b9b5e9f4dfa2056862771068d2add"},{url:"assets/index.html-f618936b.js",revision:"dcd23b52ef8964248c1a8b390e83cc26"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/lp.html-898ee15c.js",revision:"cdabca07abf3b123d8e0888d72cbbc43"},{url:"assets/lp.html-b782fe03.js",revision:"a31051c62eddca1689d2794a998d41df"},{url:"assets/lua.html-33cfab80.js",revision:"5526659159046cf01405004c7d8b8140"},{url:"assets/lua.html-36869987.js",revision:"9ec65542464ab5447f585ba0a7baa9da"},{url:"assets/network.html-200120e5.js",revision:"5a35c481d99eb07566b6e593c22e90ab"},{url:"assets/network.html-c1fafaa7.js",revision:"79686ec320b24bc30c022509a5336752"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/SearchBox-0737a19d.js",revision:"7492a70eb065249c15016a2356e54f77"},{url:"assets/style-3e398be6.css",revision:"d3f1a72912e828808165405fb72efddb"},{url:"assets/two_way-db10fb1f.svg",revision:"19f0a97f9994249b0ff19be5269fd79f"},{url:"assets/visualization.html-223fd4f1.js",revision:"21c51c3e67b29b7f7fba356493c09fcf"},{url:"assets/visualization.html-a65be55f.js",revision:"546940ef4c0a29e36d90973137ccbd49"},{url:"404.html",revision:"7925601fa628238b0ffad76c05435de3"},{url:"docs/1.1_what_microcity_can_do.html",revision:"730156e7458678fa849b185fc0c37c1c"},{url:"docs/2.1_showing_a_world_map.html",revision:"e11ede41c3fa488fc44780292c05a37b"},{url:"docs/2.2_searching_for_countries.html",revision:"da9f1acb98b8dd18373cb3c8071ba6c8"},{url:"docs/3.1_ui_overview.html",revision:"965d20e56148ad54f7bcd82dfe50f1ec"},{url:"docs/3.2_vector_shapes.html",revision:"225fa5cecbe572137bf35add53e4357d"},{url:"docs/3.3_raster_grids.html",revision:"ca7d944d198fcf1a3bb55e32362db8d1"},{url:"docs/3.4_3d_scenes.html",revision:"febd51c8720f5aca5c66cb58bf2ae8d0"},{url:"docs/3.5_tables.html",revision:"8cf1b3d40201f9a027316643a2347fe4"},{url:"docs/3.6_maps_and_layers.html",revision:"d74f30333b8be103752ff747e2d09e23"},{url:"docs/3.7_modules.html",revision:"198ec2e087bc5344e14af52fe8f5fd4b"},{url:"docs/4.1_si_overview.html",revision:"56f5d5503c48c58a52e09acfee7d7eea"},{url:"docs/4.2_ui_control.html",revision:"35e384cb7485893ff6dd81a0d1266edb"},{url:"docs/4.3_shapes_and_tables.html",revision:"0260e96601d57b022fea11c35f5a9fff"},{url:"docs/4.4_grids.html",revision:"347d3f18ae497060a3984d71e4de13a0"},{url:"docs/4.5_3d_scenes.html",revision:"084b658e1540b7e69b18151d6b5b53e7"},{url:"docs/4.6_networks.html",revision:"0bc77eff43a826a1909cb4d1137e5bbb"},{url:"docs/4.7_des_simulations.html",revision:"5d15c0fa1f62a51f1b94dee5d05a9711"},{url:"docs/4.8_mixed_integer_programming.html",revision:"34426af75ca8d6364b131938bfe51d1a"},{url:"docs/imgs/index.html",revision:"0782e7bcef9081015ef526c54f805bbb"},{url:"docs/index.html",revision:"35d14e790a43c1d6bfad1b4f869a8f3d"},{url:"google3a9084eedb90aa13.html",revision:"5fdd561cbfed9c1a090e11665147df61"},{url:"index.html",revision:"7ac1bd70fc0b346d95e7dd56db24293b"},{url:"notes/index.html",revision:"06e9a974e56436d00fa7cc137a01da19"},{url:"notes/lp.html",revision:"0db0a1ed5fe33befeadb8f11e21ccad7"},{url:"notes/lua.html",revision:"9576515bbf91e3127b4311c4e77cbc2a"},{url:"notes/network.html",revision:"bcf29768230bf945c5d2af0729f682f7"},{url:"notes/visualization.html",revision:"bafe0c2b5a99569b838ec4b4fdc31f7c"},{url:"assets/city_logistics-1664b134.png",revision:"f0e83dfc21b4da0afee21ec1645a5ce4"},{url:"assets/close_save_grid-ccbd51be.png",revision:"06823158f287c332e303ce9e74f119b1"},{url:"assets/close_save_shapes-1b417e51.png",revision:"6285144c1d85e6c8d7c12459ea8ecfa2"},{url:"assets/data_visualization-92e88960.png",revision:"bcf2333bc33ffde8b5f201e79ae4fb2b"},{url:"assets/DL_Heatmap-dd6ce94d.png",revision:"5f26dd003befff9e1f6eb994197cf3ce"},{url:"assets/edit_point-a19bc15b.png",revision:"b56499ca449e9cb42efa0ef5fe21aefd"},{url:"assets/edit_shape-220e5d8f.png",revision:"5ee823e7cf71f04215c697036c15acb0"},{url:"assets/gis_data_structure-e0d0de5b.png",revision:"77fa044dae581369badf8cb87d8e006c"},{url:"assets/GraduatedColorProperties-7cfa6748.png",revision:"acaa6f8e656886bcec42e74379e9eee5"},{url:"assets/GraduatedColorResult-c782c941.png",revision:"9869925032dbd7d448f4b1b60ab3c8a9"},{url:"assets/GraduatedColorSettings-ed4a8a9a.png",revision:"74ff570e2d95f95663e1565bb86a75e8"},{url:"assets/grid_attributes-5692514f.png",revision:"99da94947795b278ee0bb4410dcf5e0e"},{url:"assets/grid_menu-e895d27d.png",revision:"636dff6ad1216aa74de6214aba408e9f"},{url:"assets/grid_selection-8854b919.png",revision:"a854dc544ec5239818be6a245b4d558a"},{url:"assets/grid_structure-3ee378f9.png",revision:"4be1f0e0a70ddd24dfe875312edef079"},{url:"assets/LabelAttribProperties-626ac855.png",revision:"f95bfff89484f9f07ec316c996da5cf3"},{url:"assets/layer_menu-6ca31e5d.png",revision:"55d3c08736142acc4245d482c2c0ce6a"},{url:"assets/LookupTableColor-10db14bb.png",revision:"af9601eb62ef3be4d01eb33f51a63661"},{url:"assets/LookupTableProperties-0ecb4f51.png",revision:"16ab4c133ef51f5e9db60a401211c0da"},{url:"assets/main_window-9123f68c.png",revision:"312ba4b6c91267ecef63c6ee00bc21e9"},{url:"assets/map_coordinates-da327b14.png",revision:"c39aa1c8a4c3ed6e5b507f8cf3874160"},{url:"assets/map_menu-09bcc68b.png",revision:"a95051447bc04efd2d5e706c872d3493"},{url:"assets/module_libraries_settings-dd7c0fc9.png",revision:"bf0570b0b6130844d28fa3c402a27ffb"},{url:"assets/module_settings-1a887b09.png",revision:"ba28f8624752e27c514377e213ea642a"},{url:"assets/modules-d3a93b78.png",revision:"55cea6ae301455d142cec78857a08aa9"},{url:"assets/new_grid-6d78c958.png",revision:"cf382a920be3a7338877a71b78d66365"},{url:"assets/new_scene-08d6e9d8.png",revision:"d5e69908016913fe08d8e00c90f6fb13"},{url:"assets/new_shapes-df4ba5d2.png",revision:"36c06984f09ac60f8161c8d6aa860cf7"},{url:"assets/new_table-8a32e9c0.png",revision:"89408a0284dd95c1421c0d5b4e6131f7"},{url:"assets/object_menu-b625bc11.png",revision:"eec516547d2a3ac027546ae348f4f054"},{url:"assets/PlotPrice1-2328e878.png",revision:"2343fd9de1abdbbaf15f5413236f76fb"},{url:"assets/PlotPrice2-c18b4f48.png",revision:"1a853fda82ea81fff7b44d65ba15346a"},{url:"assets/query_results-31e2845b.png",revision:"527d9a24621e0953478d8cd1224d973a"},{url:"assets/RangeDotRelateToMap-20b52dc3.png",revision:"503a9b2bb8e9a9106462e15478480baa"},{url:"assets/RelateToMapBig-d6b0ca1c.png",revision:"f0dd5026b6fa4bee47c155db6d44d822"},{url:"assets/RelateToMapSmall-6e9a8bd7.png",revision:"10945aba05b9286a9182b5957f15ef01"},{url:"assets/RelateToScreenBig-bca4cb07.png",revision:"2095d6f27c66191ed2f3a5c55e4e286f"},{url:"assets/RelateToScreenSmall-3831f1e8.png",revision:"9bb544030d3ed11649649524ea8d4bb4"},{url:"assets/scene_coordinate-c96bd73e.png",revision:"4a5134bd71717c44e496080a75478b39"},{url:"assets/scene_menu-442703ef.png",revision:"92664f67e27932c0d91c26ade6252378"},{url:"assets/script_editor-7fa005ad.png",revision:"5cee3858ed9d28fd46d30d87477de338"},{url:"assets/SelectLinksColor-240a09ee.png",revision:"90ba31fd0a8532b3f841b39f898c8b7e"},{url:"assets/SetParameterProperties-0acb1156.png",revision:"fdbc3e7d199a408b5526279c6d1c6474"},{url:"assets/shapes_files-bf1b62f1.png",revision:"9a734a267477ee4d92b1cf39554bd4e2"},{url:"assets/shapes_menu-ad30912a.png",revision:"1ce52bb22c77de1d9b138fac30adbf95"},{url:"assets/shipping_planning-40b10165.png",revision:"73ff5ae946bc1b3408af6852a40f14b2"},{url:"assets/shot_parameter_id-76d4dffb.png",revision:"c89a255188060a166f8890523d9596af"},{url:"assets/shot_script_editor-46219406.png",revision:"d7f18072054f41155cde343988a8a176"},{url:"assets/SizeProperties-453146b0.png",revision:"0c1b64600f1cac883992d07661a4832d"},{url:"assets/table_menu-e66f74f4.png",revision:"568acc7e16f0e89d9aab0846e6b37969"},{url:"assets/table_view_menu-30711cd5.png",revision:"a5b97ce1a8ed91d31c4fe571e0d5da4e"},{url:"assets/TableSelect-dc014ed8.png",revision:"a2f14a33f90021823a66786f4be84fae"},{url:"assets/terminal_simulation-246e0695.gif",revision:"b2c8c2047ae16200788732a65d9d342a"},{url:"assets/warehouse_simulation-21c167f0.gif",revision:"f62546662765fda4f41338846a1af6a6"},{url:"assets/world_countries-59f09c0c.png",revision:"e850582792c99b09af68ca948e2aff8e"},{url:"images/icon_microcity.png",revision:"08f31df45215c6018336c0acf1ff5e4d"},{url:"images/icon_microcitynotes.png",revision:"8fab94c045ebfa93980673848abc96b2"},{url:"images/icon/icon-144.png",revision:"06593bf0bb1b7646ed53c336be5ee07b"},{url:"images/icon/icon-192.png",revision:"dd4c61d0beacce8e965296d679fff0ca"},{url:"images/icon/icon-512.png",revision:"65e0e189f0e4f4fe72e6a6c47480c655"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
