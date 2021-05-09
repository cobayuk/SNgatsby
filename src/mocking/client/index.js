
/**
 *
 * Mocking Documentation
 * Sungnikah Corporation v1.0
 *
 */

export const configThemesFirst = {}

export const configThemesSecond = {
  //pengantin pria
  groom: {
    nickName: "Andy",
    fullName: "Andy Winarko",
    // get data from pengantin pria ( parent pria & parent wanita )
    parents: {
      maleGuardian: {
        fullName: "Karim Muhadin",
      },
      womenGuardian: {
        fullName: "Jey Salbila",
      },
      tagline: "Putra Pertama dari Bpk. Karim Muhadin dan Ibu Jey Salbila"
    }
  },
  //pengantin wanita
  bride: {
    nickName: "Syifa",
    fullName: "Syifa Putri Lubis",
    // get data from pengantin wanita ( parent pria & parent wanita )
    parents: {
      maleGuardian: {
        fullName: "Jojo Amin",
      },
      womenGuardian: {
        fullName: "Sari Asih",
      },
      tagline: "Putri Pertama dari Bpk. Jojo Amin dan Ibu Sari Asih"
    }
  },
  //location
  location: {
    placeName : "POKEL Garden Resto",
    detailName : "Jl. Perjuagan, Kasemen, Kec. Kasemen, Kota Serang, Banten 42162"
  },
  // akad
  contractMarriage: {
    time: "Pukul 09.00 - 10.00 Wib",
    days: "Senin",
    dateTime: "Senin, 11 July 2021",
    timeCountDown: "20 hari | 18 jam | 60 menit | 24 detik"
  },
  weddingReception: {
    time: "Pukul 10.10 - 13.00 Wib"
  },
  placeHolderTag: {
    timeStarted: 'JULY 11th, 2021'
  }
}
