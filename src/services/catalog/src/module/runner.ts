import axios from 'axios';

import * as crom from 'node-cron';
export class Runner {
  counter = 6650000;
  async testSite() {
    //

    crom.schedule('*/1 * * * * *', async () => {
      for (let i = 0; i < 900; i++) {
        // const data = await this.getData(this.counter);
        //   console.log(data);
        await this.run(this.counter);
        this.counter++;
      }
    });
  }

  getData = async (counter: number) => {
    return {
      person: {
        partyTypeEnumId: 'PtyPerson',
        nationality: 'pclIR',
        firstName: 'علی',
        lastName: 'علوی',
        gender: 'GrMale',
        ptidNationalCd: this.random(counter),
        fatherName: '',
        ptidIdentityNmb: '55',
        issuedIn: '1510',
        pcltReligion: 'pcIslmshi',
        birthDate: '2018-8-30',
        maritalStatusEnumId: '',
        personContactMech: {
          personCountry: 'IRN',
          mobileNumber: '09115003574',
          personProvince: '',
          personAreaCode: '',
          personCity: '',
          personPhone: '',
          personPostalCode: '',
          personEmail: '',
          personAddress: '',
          countryCode: '',
        },
        studyInfo: {
          pcltEducation: 'pcCler',
          pcltEducationBranch: '',
          title: '',
          committee: '',
          committeePlace: '',
        },
        paymentMethod: {
          accountNumber: '',
          cardNumber: '',
          bakId: '',
          shabaNumber: '',
        },
        ptidForeignId: '',
        isConsole: false,
      },
      submit: true,
      moquiSessionToken: 'J2P_14Zh5y8mdIEopUJv',
    };
  };

  run = async (counter: number) => {
    axios
      .get('https://dsrc.ir/', {
        headers: {
          https:
            'JSESSIONID=FFD6E986EE77DFCA02BD0A90490C2718; cookiesession1=678B28786F707829AAD97B4933F87933; moqui.visitor=52eee871-3cf4-44e7-93a9-3057c659a7f8;',
        },
      })

      .then((res) => {
        console.log(res.data);
        //return res.data;
      })
      .catch((err) => {
        console.log(err);
        // return err;
      });
    console.log(counter);
  };

  random = (counter: number) => {
    const size = counter.toString().length;
    if (size < 10) {
      return '0'.repeat(10 - size) + counter.toString();
    }
    return counter.toString();
  };
}
