'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "7caa94c8c2b633f4f611ae5b3e2a3341",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c754b2287c680a0da6244ba2a41688e3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6c93bedd84a242e0a5aacb70e9b9406b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f47f6ecfbf0ef76f71f4fc3ea77f5edc",
".git/logs/refs/heads/main": "f47f6ecfbf0ef76f71f4fc3ea77f5edc",
".git/logs/refs/remotes/heroku/main": "af4180248b1f2452c30e9c10eb0b74a7",
".git/logs/refs/remotes/origin/main": "3ec0e38e75a6fbd7e489a907d3f63f8b",
".git/objects/00/aa8f4fe048f1deb861ca505ef19e870d60bbcb": "49436c65257f3897e75292eefba6d2a6",
".git/objects/01/849ed620d72aeee555d90993ef00a2dd578a80": "c6356d3b5d58c012bc20d0f600062dc0",
".git/objects/02/f4f9be108bbb5bb65010d5492fa56aee099001": "6e8ec021a9bbdf5935a59f5a9974e0f9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/21d0a829843cd1a7e0ac287f6a655414e9036e": "cae2f2060d59775ef531a23aa878ef79",
".git/objects/05/ead90d3aa50c1fb5f3231c87d90535c8af1d16": "ac8f6962e999597243edf4beae299e61",
".git/objects/06/de8a1e75b1196b4a59e89bcb6e70bc858397c2": "e41b1a629dd126cc389a23a598833dfe",
".git/objects/07/276a0b002c5a443ae25a644391e7c29cc5f1aa": "96483d7b44483dd25ade7996e83c534c",
".git/objects/07/9af43e35a1ff96ac1b9b6e0f25ce0a5a7e0094": "e58eb6347785420ad6954412c45f92f4",
".git/objects/09/4c54a00ee91123926c50b73b9a629fc52568d1": "b2ad95b0e2d801cf85cf395b70741a3f",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/e471cd1c65dd3ad21a18cd7d0a7bf89046752b": "b4cb435f109ed0edba3d0cfc6a56c9df",
".git/objects/0f/a6b675c0a52be9242fc68269eefce46828ad43": "3732df75a452960f40377486a7eb2955",
".git/objects/14/2c4ae43eb5430711058511d97008885c3587d7": "60ad66e39ede77f97f844105b9a43f85",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/15/db429e7488652e3b2ed0f5fb2c21b15cb8a9f7": "1558505a4e8de9865cccc3719cf9bc23",
".git/objects/16/76d0709cb2b30c6340bf218e81dac89fccb881": "13bdbe42f7107207dc8bf06e9cd2cee4",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/1a/94d0dce453d59f7c24b1ea2a620bae7681751c": "e70877d605aa6f2a0d1c03a7b05ba692",
".git/objects/1b/f7a8964e2630f9ade653fca2e49b95dbf950ac": "bd07a26f3169c5889ac39ef86abc82f0",
".git/objects/1c/df08c5d528830985be8fa9d12e6c82191cf377": "17ed3d1df3f4cb18cd2ebd1fbf6c6e79",
".git/objects/1c/f7d4e4090e14b6be9661bec3178345be4471d1": "131d75b3d9b42a999b9ca37b9514f8ec",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/1e/0dcb5c8dd522f94390594ed51348be8198bb98": "9b24fc1b47295875070d25097ce33bdc",
".git/objects/1f/3edc02815fcee836770bebaebca844378dc826": "35a7db1adc995b78e6d7569e77501319",
".git/objects/23/248418d819304baca0a96179b45a6d9cf2bfeb": "3446f37b0273d353b5eb62b9c06128f7",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/b6d365f6ffce7cd587d039ef6fb03b09f2fca8": "d850ac6f36ff30b891787c4e9b971f80",
".git/objects/28/c6bf03016f6c994b70f38d1b7346e5831b531f": "859e347621927457ff896dba865a18fd",
".git/objects/29/f7a492f9b4ba3a9924503edd9f7568afe494cf": "5caaea8b9209697e53735b4bc6a3b73f",
".git/objects/2c/23fe1d4a5e0885072073d49304c05c02b89663": "d5a8576470aa98561e339d3bdf511a41",
".git/objects/2c/cbfd967d9697cd4b83225558af2911e9571c9b": "79f574379587d27e91d5ebf05ea6e777",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/33/bf4708155ada2bbdf5c5fd02faea83ac28609f": "5a1401ab54f3831747b1228fca069feb",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/37/49d50c234d7db2ab5045934b4f30746d2fc0fb": "49b7c7a11329b82abb997587841bbd6a",
".git/objects/3a/3da0bb05b679f0a09dd3da375f54187191db76": "440f79087fb2f1828799d865a459dcc9",
".git/objects/3a/f55432c592908616cd0042846f6334f515faa1": "db07c7e0fb35682fc8c306ceaed91849",
".git/objects/3d/b14bb5391f15a50272edf91d2e420f0e3da36a": "a057859fb8714261bbfb4d1f90df390b",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/3f/80d4c1c1e0a9fb1cd6748810deff30476f0914": "7c2c92077abe8cfb38244a5d620a4cba",
".git/objects/41/d8c1e9ba54c4c01484eb29a4b259660b85aa18": "436bdf193af2c31182bd7746994f00e2",
".git/objects/42/56f9173625d2b6c3810e1946a6d1ee138034d3": "4081e011c137e03b2d7144e595179d8f",
".git/objects/44/63b0e9624da39eacf92d20e7bc7c087c64f03a": "51d879ece7fa7be5ad7faba5a87c6cea",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/47/edf407b4e4b97ca0b6974d18e105e008175c40": "1b2ae7c185ffc4b6081899bfa0aa4bde",
".git/objects/4a/c1ac888441732f57a3c3b31abb7484f86fdf3e": "c1fe3f6261e12e81994b1094b5e6092c",
".git/objects/4c/0880a6ea41b4bb7d188227aea7ea5b9af6e24c": "771201cc1db4eb65f13e0576bfff387f",
".git/objects/4c/de12118dda48d71e01fcb589a74d069c5d7cb5": "28e8a446706511f1a67da714824896ea",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4e/1928dee533b845216da181f8e98b15febecaec": "5bccfb0253bbc6a57ce2b34d95357263",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/cdaec968cc5175f24c0e6775903400f1755e02": "2043439be4fa8ad762e41f800cb86569",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/ca1fffc0933422b1efeb7f0da55cf61068ea07": "df8fb619646f92282cb2852dcd6c423c",
".git/objects/55/eaf8c41b9fc8b395ebb83ddcaace40d3800226": "8a3924bcf53a090184a3aadc58c29e1f",
".git/objects/58/8a06501d02269efe78427d958683756696080d": "bf940f42f993b2500467f0399cefd7d8",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/5b/0e3b9b2ec33a5bd59ba3f452670fe174be8b7e": "84a5b2b16fa9ec73908657180380869c",
".git/objects/5c/7e65a7efb964d3771ab6cbf9b461027f1ab0dd": "a2ae397654d084293b62f53d32e92af1",
".git/objects/61/45372307b4436492d9771546a53772c5e918e3": "89bcae6f2e3e3da1ec9f3152cc08e1b5",
".git/objects/61/b6c4de17c96863d24279f06b85e01b6ebbdb34": "5486bd6a506a32f8c081890c2befb8eb",
".git/objects/64/c766d00debb6f2320ea19e3c82e29b0779e8f3": "ed7df6d2deef3cf9d45d335c4eb415f3",
".git/objects/64/e3174f4528828e346b8f84a4ef439677cb086b": "9b79f1696b6d7f2424bc0b1ccae7153e",
".git/objects/65/eed7fd47f194ef259891a6cb377cd2a6ab485e": "7861685a50d2ed9d0bf38bec5ffda9c6",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/6a/84f41e14e27f4b11f16f9ee39279ac98f8d5ac": "a913aaf750cc736879f14f53488f5c42",
".git/objects/6b/12cb57e4f4a7a3072778da23c9887e2ae3e6d1": "06da5d03971d390d8b70b6f9343a985a",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/6d/1079d3ab0cebc175297127c343db6605fe9bf2": "eacf4b63099b0743f4b203405f49532e",
".git/objects/6f/568019d3c69d4966bb5a0f759980a1472afc1e": "11711ec452167a523e427fab835abd15",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/71/2942081c00766c85a1b54d9853780db86a00ea": "7dd0a58cc76f6182c35d3422048325a5",
".git/objects/72/aaa963bebbcfc1b5f2c28e16903a9b40af3203": "ea14e66980590824714f2b1c87173342",
".git/objects/75/b2d164a5a98e212cca15ea7bf2ab5de5108680": "d453ef5dc75a6b2e158c081f7a51acac",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/49a1ec2233c85d553096eba9f0af0101bcdfdd": "bf3ea6be970d9bcd6eb21a2d3170ba70",
".git/objects/78/a1891b0f9a3de1702c06cc1691aceb525b8c5b": "4405e6f88a40652816df1399a6f99a01",
".git/objects/78/b6fcb625ed63ebffb5dfb2be776dde45890205": "600048822b5b2dcb8ebc83bd282ee5c9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/80/dd6848309958801f535eb1fdd3069e37929959": "273e930701b67a4e962d9880203f0801",
".git/objects/83/0af5655d3424ec831132516518e9b0f7488bda": "f205ff8dc8187a4991e83eaafad0b12e",
".git/objects/84/d08f7b151f10507b1d8c24043ab1d088f4c0aa": "a6fbdf88da12c6ac558a3a6de7fc2c33",
".git/objects/84/dbb7bb5cbb446c034d01555f6378d8920b90f3": "df0cf946850c73648697726656f347a3",
".git/objects/85/32bd02c9bb27c8c002203e45fca5350f35a6bf": "dd99b2584c6f7bdbe90bfb1ca55c0e2e",
".git/objects/86/d954b80fa40d85ac9176d6d009bc2410958eed": "a778e9b1d55204f26c536d557aa36b66",
".git/objects/86/e967bd3f41c4d3b4746842b45c2bfb23dc269e": "b5b5b53ffe02a04f31dfbd6085955500",
".git/objects/87/f07dddc09e9ab5793d7f18960f777c1bc93457": "b2ed7da618fb5df170a9ecf520260cbd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/2e7e79f7154b2e4c1abe87b0356c9988f2cddb": "0f6edb174bd04a8d53e3e576a7c3ea36",
".git/objects/8d/4492f977adc7dd7a836405d4916e5c9c014536": "17812516aa18e24296a565b4fbad60b5",
".git/objects/8e/f5eafe3f54d209ad7ebe937ee037081c2a3a55": "bee76758db0a22e989e9546ef5765cf0",
".git/objects/90/33c1db2e61f99ec6da097bcb10e3794bbe562c": "be472dc8742e2fdfee58c2122725541b",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/91/bd8790d631b7e03d19a91f8d0ed35765a9f100": "4ff2c21cedcd78a4208fccfc398b16a8",
".git/objects/93/3c557b1dc72a9dcc6449327c9ffaa693589983": "a1ff0d5c948cdcf59bf3c5c3d69b2e97",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/9e/1b0b52013d6367dd3da4af9cdd5e9c1de04d58": "84c5e81c80f321655004cbc2ae60f365",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a0/31d633f99c4c98bcb9d847198e340244631e91": "9d6da6676ab78031199293783b9a865c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/c4b9c9c19682884c00849a18ab51366846961b": "d716ad92f448bac49176e90f93510e26",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a6/d6b8609df07bf62e5100a53a01510388bd2b22": "821831c6c42de47994c16f6a1db3ea7e",
".git/objects/a7/2b2d5aaa9a6bd4255ac87438c5ba68ed7a99df": "7a42da4604b8d891b108aa6386b7ee60",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/267cd922d8c704d177f564948a9b26e35bc10c": "a75d3823db5546325fd0026188fd132b",
".git/objects/af/55af48a22e67c020e94f148db4dbdcf53c2e58": "4323cde0f648a20ac23427cb7f0669a2",
".git/objects/b0/8e75b59d9a829d23f4c24b3f83a505cc9ad763": "02e47a7d868eaa6ace52ecf04017a2a0",
".git/objects/b3/fd73e9b232a31ee970c19df6bb7ad8fb1be224": "d1b7b2ecd72e75c8c23ef1806ce4fcb8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e9505c792ba237000f8911cb15ddf5fe1e5a41": "d95174541348cb9ee76311d9abcaa204",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/6a58afdda22a443c752eaae3d60c2480511a9f": "d86646f2e9abb9d77e2e8346ade8749b",
".git/objects/be/147714ebfac3535bad3fc9b82cc1e872141ce2": "bb98dd08f8ce3ed29ba301a96b50cffe",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/df70d39da7941ef3f6dcb7f06a192d8dcb308d": "d394f8200d968d57839b22cbe657146e",
".git/objects/c6/938b55d5ec4f7dce1553224dcc121041c548e2": "0867fa8344611d6cbf865e0acef7c715",
".git/objects/c8/7d15a335208541da7c11961b0f6d5f6035512e": "a6105aabe7a3384131da4bf043c5878b",
".git/objects/c8/f9ed8f5cee1c98386d13b17e89f719e83555b2": "0fc2e076b543f37f90a9e7159555320c",
".git/objects/cf/f7eeba31a91be627bd00259584ec6729d38e46": "7df61f5774ebae9e447f4f741844d561",
".git/objects/d0/e1f58536026aebc4f1f70e481f6993c9ff088d": "18109e32e7fc3bf04e529c14b8723746",
".git/objects/d0/ef06e7edb86cdfe0d15b4b0d98334a86163658": "4d865184682ad08c3405e3934cd91fa9",
".git/objects/d2/fa6bf3b6a70ba7bb99c891db77c3ec6f0dff6c": "9729d02a8d3efe9dc6063e9e9d9c0f71",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d4/60d1e9215b1a2d574b976403eec0381e8ad73d": "65c4a356b681f68dc3c7f303dbd931c5",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/da/9f158717d7c22c4082b91c4084c208afc31012": "cdb29f14833245a99e689050636da9d7",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dc/dc2306c28505ebc0b6c3a359c4d252bf626b9f": "e712bf13b0d526e57c6ee1c8acc412d4",
".git/objects/e0/d16fe56d6f12c217719dc2cd75545f44bfc973": "a45752aa781f95b86fe59cbf6f08ee9c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/a7aa4c48061780c9bd39f607d9495abb870ea0": "502b09ec7ed80d78c8fa18f1b2b30559",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/7f61dc6dd5a4be88826db29cd42d76417fd036": "674e369b0019ccb8a53a689ac6444a42",
".git/objects/f0/91b6b0bca859a3f474b03065bef75ba58a9e4c": "1aef8d0dea7cfdb7ffb51559c81d2fdf",
".git/objects/f0/e52ff6de5515f0d571ffef02fd55a6681c4b65": "d4d752573efb770a63ea3a9ead44d68b",
".git/objects/f2/56d8234103f00fd3eb415f8db232b32a159bb3": "7962259072d1e05f4c75d5432b9d1cf7",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/fd/f28b6a3406c9514834ac1d88405053aae25c7b": "8c4b3e2538e16e1db03ccf5a70a24305",
".git/ORIG_HEAD": "8f3c581cfbe9327099bf7d5d8abd6cc5",
".git/refs/heads/main": "9248f980e7f58d6f0e9c17151c7122a6",
".git/refs/remotes/heroku/main": "9248f980e7f58d6f0e9c17151c7122a6",
".git/refs/remotes/origin/main": "9248f980e7f58d6f0e9c17151c7122a6",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "654548a2fed4c106c00bd21de6db19ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"composer.json": "99914b932bd37a50b983c5e7c90ae93b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "67ef631347f4283c162d1febc79466d4",
"/": "67ef631347f4283c162d1febc79466d4",
"index.php": "59dc2095842f1bcc5cd8d94ed1f10461",
"main.dart.js": "6e368229469810a5487aa6a3b590ac47",
"manifest.json": "afb9ccc67adbbf9c29984831c74b6914",
"version.json": "608a3f31c4ffb81d9c040c19f5543354"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
