import type { Product } from '../types/Products';

export const products: Product[] = [
  {
    id: 'masc-z-wrotyczu',
    name: 'Maść z wrotyczu',
    image: '/images/masc_z_wrotyczu.jpg',
    description: `
      Naturalna maść z wrotyczu

      Masz problem z suchą, podrażnioną lub problematyczną skórą?
      Postaw na sprawdzony, domowy wyrób z natury.
    `,
    sklad: `
      • macerat z wrotyczu
      • olej roślinny
      • wosk pszczeli
    `,
    zastosowanie: `
      Stosować zewnętrznie na skórę.
      Niewielką ilość nanieść na miejsce wymagające pielęgnacji 1–2 razy dziennie.
    `,
    dzialanie: `
      • wspiera regenerację skóry
      • łagodzi podrażnienia i zaczerwienienia
      • polecana przy egzemie, łuszczycy i trądziku
      • naturalnie odstrasza owady
    `,
    variants: [
      {
        sellable: true,
        quantity: 50,
        quantity_unit: 'ml',
        price: 30,
        shopUrl:
          'https://www.olx.pl/d/oferta/masc-z-wrotyczu-50-ml-ostatnie-sztuki-CID3647-ID17ylhD.html',
      },
      {
        sellable: true,
        quantity: 90,
        quantity_unit: 'ml',
        price: 40,
        shopUrl: 'https://www.olx.pl/d/oferta/masc-wrotyczowa-90-ml-CID3647-ID18Y423.html',
      },
      {
        sellable: true,
        quantity: 20,
        quantity_unit: 'ml',
        price: 15,
        shopUrl:
          'https://www.olx.pl/d/oferta/masc-z-wrotyczu-50-ml-ostatnie-sztuki-CID3647-ID17ylhD.html',
      },
      {
        sellable: true,
        quantity: 30,
        quantity_unit: 'ml',
        price: 20,
        shopUrl:
          'https://www.olx.pl/d/oferta/masc-z-wrotyczu-50-ml-ostatnie-sztuki-CID3647-ID17ylhD.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'syrop-z-wrotyczu-nieslodzony',
    name: 'Syrop z wrotyczu niesłodzony',
    image: '/images/syrop_z_wrotyczu_nieslodzony.jpg',
    description: `
      Niesłodzony syrop z wrotyczu – 200 ml

      Naturalny wyrób z wrotyczu zbieranego w ekologicznym gospodarstwie.
    `,
    sklad: `
      • wrotycz
      • woda
    `,
    zastosowanie: `
      Do użytku zewnętrznego.
      Stosować do okładów, nacierań i przemywania skóry.
    `,
    dzialanie: `
      • działa przeciwzapalnie
      • łagodzi ból
      • wspiera regenerację skóry
    `,
    variants: [
      {
        sellable: true,
        quantity: 200,
        quantity_unit: 'ml',
        price: 12,
        shopUrl: 'https://www.olx.pl/d/oferta/syrop-z-wroryczu-CID3647-ID18UVVn.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'domowy-syrop-mietowy',
    name: 'Domowy syrop miętowy',
    image: '/images/domowy_syrop_mietowy.jpg',
    description: `
      Domowy syrop miętowy – 330 ml

      Naturalny, aromatyczny syrop miętowy przygotowany z mięty zbieranej w Beskidzie Niskim.
    `,
    sklad: `
      • mięta
      • cukier
      • woda
    `,
    zastosowanie: `
      Dodatek do wody, herbaty, deserów i napojów.
    `,
    dzialanie: `
      • wspiera trawienie i pomaga przy wzdęciach
      • działa orzeźwiająco i uspokajająco
      • łagodzi kaszel i podrażnienia gardła
    `,
    variants: [
      {
        sellable: true,
        quantity: 330,
        quantity_unit: 'ml',
        price: 11,
        shopUrl: 'https://www.olx.pl/d/oferta/syrop-mietowy-330-ml-CID757-ID17ye9t.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'syrop-z-mlodych-pedow-sosny',
    name: 'Syrop z młodych pędów sosny',
    image: '/images/syrop_z_mlodych_pedow_sosny.jpg',
    description: `
      Syrop z młodych pędów sosny – 330 ml

      Naturalny syrop wspierający drogi oddechowe.
    `,
    sklad: `
      • młode pędy sosny
      • cukier
    `,
    zastosowanie: `
      Dodatek do herbaty lub spożycie bezpośrednie.
    `,
    dzialanie: `
      • wspiera odporność
      • działa wykrztuśnie
      • łagodzi stany zapalne gardła
    `,
    variants: [
      {
        sellable: true,
        quantity: 330,
        quantity_unit: 'ml',
        price: 25,
        shopUrl:
          'https://www.olx.pl/d/oferta/syrop-z-mlodych-pedow-sosny-330-ml-ostatnie-sztuki-CID757-ID17ydSH.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'syrop-z-nawloci-nieslodzony',
    name: 'Syrop z nawłoci niesłodzony',
    image: '/images/syrop_z_nawloci_nieslodzony.jpg',
    description: `
      Niesłodzony syrop z nawłoci – 500 ml

      Naturalny syrop z nawłoci, zbieranej ekologicznie.
    `,
    sklad: `
      • nawłoć
      • woda
    `,
    zastosowanie: `
      Stosować jako dodatek do napojów lub przemywania skóry.
    `,
    dzialanie: `
      • wspiera oczyszczanie organizmu
      • łagodzi stany zapalne dróg moczowych
      • wspomaga układ pokarmowy
    `,
    variants: [
      {
        sellable: true,
        quantity: 500,
        quantity_unit: 'ml',
        price: 15,
        shopUrl: 'https://www.olx.pl/d/oferta/syrop-z-nawloci-nieslodzony-CID757-ID17ylyV.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'masc-z-krwawnika-na-oliwie-extra-virgin',
    name: 'Maść z krwawnika na oliwie extra virgin',
    image: '/images/masc_z_krwawnika.jpg',
    description: `
      Maść z krwawnika na oliwie extra virgin – 90 ml

      Naturalna maść do pielęgnacji skóry.
    `,
    sklad: `
      • krwawnik
      • oliwa extra virgin
      • wosk pszczeli
    `,
    zastosowanie: `
      Nanieść na skórę 1–2 razy dziennie.
    `,
    dzialanie: `
      • wspomaga gojenie ran
      • łagodzi podrażnienia i stany zapalne
      • pielęgnuje suchą skórę
    `,
    variants: [
      {
        sellable: true,
        quantity: 90,
        quantity_unit: 'ml',
        price: 30,
        shopUrl: 'https://www.olx.pl/d/oferta/masc-z-krwawnika-90-ml-ev-CID3647-ID181J37.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'masc-z-krwawnika-na-oleju-kokosowym',
    name: 'Maść z krwawnika na oleju kokosowym',
    image: '/images/masc_z_krwawnika.jpg',
    description: `
      Maść z krwawnika na oleju kokosowym – 90 ml

      Naturalna maść odżywcza i regenerująca.
    `,
    sklad: `
      • krwawnik
      • olej kokosowy
      • wosk pszczeli
    `,
    zastosowanie: `
      Nanieść na skórę problematyczną 1–2 razy dziennie.
    `,
    dzialanie: `
      • łagodzi podrażnienia
      • regeneruje i nawilża skórę
      • działa kojąco przy ukąszeniach owadów
    `,
    variants: [
      {
        sellable: true,
        quantity: 90,
        quantity_unit: 'ml',
        price: 20,
        shopUrl: 'https://www.olx.pl/d/oferta/masc-z-krwawnika-90-ml-o-k-CID3647-ID18O25E.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'masc-z-wrotyczu-na-oleju-kokosowym',
    name: 'Maść z wrotyczu na oleju kokosowym',
    image: '/images/masc_z_wrotyczu_na_oleju_kokosowym.jpg',
    description: `
      Maść z wrotyczu na oleju kokosowym – 90 ml

      Naturalna maść regenerująca i kojąca.
    `,
    sklad: `
      • wrotycz
      • olej kokosowy
      • wosk pszczeli
    `,
    zastosowanie: `
      Nanieść na skórę 1–2 razy dziennie.
    `,
    dzialanie: `
      • pielęgnuje suchą i podrażnioną skórę
      • wspomaga regenerację
      • działa przeciwzapalnie i antybakteryjnie
      • naturalnie odstrasza owady
    `,
    variants: [
      {
        sellable: true,
        quantity: 90,
        quantity_unit: 'ml',
        price: 45,
        shopUrl: 'https://www.olx.pl/d/oferta/mazidlo-z-wrotyczu-90-ml-CID757-ID18O2gj.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'zywy-ocet-winogronowy-jasne-winogrona',
    name: 'Żywy ocet winogronowy z jasnych winogron',
    image: '/images/zywy_ocet.jpg',
    description: `
      Żywy ocet winogronowy – 250 ml

      Niepasteryzowany, bogaty w witaminy i minerały.
    `,
    sklad: `
      • jasne winogrona
      • woda
    `,
    zastosowanie: `
      Do napojów, kuchni i pielęgnacji.
    `,
    dzialanie: `
      • wspiera krążenie i metabolizm
      • działa antyoksydacyjnie
      • stabilizuje poziom cukru we krwi
    `,
    variants: [
      {
        sellable: true,
        quantity: 250,
        quantity_unit: 'ml',
        price: 20,
        shopUrl:
          'https://www.olx.pl/d/oferta/zywy-ocet-winogronowy-z-jasnych-winogron-250-ml-CID757-ID17ZcI2.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'zywy-ocet-dzikiej-rozy-z-miodem',
    name: 'Żywy ocet z owoców dzikiej róży z miodem akacjowym',
    image: '/images/zywy_ocet.jpg',
    description: `
      Żywy ocet z owoców dzikiej róży – 250 ml

      Słodzony miodem akacjowym, niski indeks glikemiczny.
    `,
    sklad: `
      • owoce dzikiej róży
      • miód akacjowy
      • woda
    `,
    zastosowanie: `
      Do picia lub jako dodatek do potraw.
    `,
    dzialanie: `
      • wspiera odporność
      • działa przeciwzapalnie
      • wspomaga oczyszczanie organizmu
    `,
    variants: [
      {
        sellable: true,
        quantity: 250,
        quantity_unit: 'ml',
        price: 25,
        shopUrl:
          'https://www.olx.pl/d/oferta/zywy-ocet-z-owocow-dzikiej-rozy-z-miodem-akacjowym-CID3647-ID17Za0D.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'zywy-ocet-aksamitkowy',
    name: 'Żywy ocet aksamitkowy',
    image: '/images/zywy_ocet.jpg',
    description: `
      Żywy ocet aksamitkowy – 250 ml

      Naturalny ocet z kwiatów aksamitki.
    `,
    sklad: `
      • kwiaty aksamitki
      • woda
    `,
    zastosowanie: `
      Do picia lub zastosowań kosmetycznych.
    `,
    dzialanie: `
      • działa antybakteryjnie
      • wspiera układ nerwowy
      • poprawia kondycję skóry
    `,
    variants: [
      {
        sellable: true,
        quantity: 250,
        quantity_unit: 'ml',
        price: 20,
        shopUrl: 'https://www.olx.pl/d/oferta/zywy-ocet-aksamitkowy-250-ml-CID757-ID17ZaJJ.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'zywy-ocet-winogronowy-ciemne-winogrona',
    name: 'Żywy ocet winogronowy z ciemnych winogron',
    image: '/images/zywy_ocet.jpg',
    description: `
      Żywy ocet winogronowy – 250 ml

      Niepasteryzowany ocet z ciemnych winogron.
    `,
    sklad: `
      • ciemne winogrona
      • woda
    `,
    zastosowanie: `
      Do picia i gotowania.
    `,
    dzialanie: `
      • wspiera krążenie
      • działa antyoksydacyjnie
      • wspomaga metabolizm
    `,
    variants: [
      {
        sellable: true,
        quantity: 250,
        quantity_unit: 'ml',
        price: 20,
        shopUrl:
          'https://www.olx.pl/d/oferta/zywy-ocet-winogronowy-z-ciemnych-winogron-250-ml-CID757-ID17ZcvU.html',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'zywy-ocet-wrotyczowy',
    name: 'Żywy ocet wrotyczowy',
    image: '/images/zywy_ocet.jpg',
    description: `
      Żywy ocet wrotyczowy – 250 ml

      Naturalny, niepasteryzowany ocet wytwarzany metodą fermentacji z dodatkiem wrotyczu.
      Zachowuje żywe kultury fermentacyjne oraz naturalny aromat roślinny.
    `,
    sklad: `
      • wrotycz
      • woda
    `,
    zastosowanie: `
      • do spożycia po rozcieńczeniu
      • jako dodatek do potraw, sosów i marynat
      • do domowych napojów fermentowanych
    `,
    dzialanie: `
      • wspiera naturalne procesy trawienne
      • pomaga w utrzymaniu prawidłowego metabolizmu
      • wykazuje działanie antyoksydacyjne
    `,
    variants: [
      {
        sellable: true,
        quantity: 250,
        quantity_unit: 'ml',
        price: 15,
        shopUrl:
          'https://www.olx.pl/d/oferta/zywy-ocet-z-wrotyczu-250-ml-CID757-ID17ZakI.html?reason=seller_listing',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
  {
    id: 'zywy-ocet-nawlociowy',
    name: 'Żywy ocet nawłociowy',
    image: '/images/zywy_ocet.jpg',
    description: `
      Żywy ocet nawłociowy – 250 ml

      Naturalny, niepasteryzowany ocet wytwarzany metodą fermentacji z dodatkiem nawłoci.
      Zachowuje żywe kultury fermentacyjne oraz delikatny, ziołowo-kwiatowy aromat.
    `,
    sklad: `
      • nawłoć
      • woda
    `,
    zastosowanie: `
      • do spożycia po rozcieńczeniu
      • jako dodatek do potraw, sosów i dressingów
      • do domowych napojów fermentowanych
    `,
    dzialanie: `
      • wspiera naturalne procesy trawienne
      • wspomaga funkcjonowanie układu moczowego
      • wykazuje działanie antyoksydacyjne
    `,
    variants: [
      {
        sellable: true,
        quantity: 250,
        quantity_unit: 'ml',
        price: 15,
        shopUrl:
          'https://www.olx.pl/d/oferta/zywy-ocet-nawlociowy-250-ml-CID757-ID17ZbxQ.html?reason=seller_listing',
      },
    ],
    sellableExternally: true,
    sellableThroughMessages: false,
  },
];
