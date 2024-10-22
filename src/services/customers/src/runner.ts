import axios from 'axios';

import * as crom from 'node-cron';
export class Runner {
  counter = 97909000;
  count = 0;
  countErr = 0;
  async testSite() {
    //
    //this.run2();
    crom.schedule('*/1 * * * * *', async () => {
      for (let i = 0; i < 45; i++) {
        const data = await this.getData(this.counter);
        //   console.log(data);
        await this.run(data, this.counter);
        this.counter++;
        console.log('count of :' + this.count++);
      }
    });
  }
  getData2 = () => {
    return {
      title: 'تست تست تست ',
      categoryEnumId: 'PortalNewsSociety',
      description: 'تست تست تست تست ',
      publishDate: '2024-10-21 11:10:39',
      thruDate: '',
      text: '<p>تست تست تست تست تست تست تست تست تست تست&nbsp;<br>&nbsp;</p>',
      newsFile: [
        {
          storage: 'base64',
          name: 'Screenshot from 2024-10-07 01-03-20-b6c762c8-a5a7-40d6-b590-1b9dc50b0ecc.png',
          url: 'data:image/png;base64,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',
          size: 5690,
          type: 'image/png',
          originalName: 'Screenshot from 2024-10-07 01-03-20.png',
        },
      ],
      submit: true,
      moquiSessionToken: 'bokX6llIviuv_mxskmsJ',
    };
  };
  getData = async (counter: number) => {
    return {
      person: {
        partyTypeEnumId: 'PtyPerson',
        nationality: 'pclIR',
        firstName: '  علی',
        lastName: '  علوی',
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
          personCity: this.getRandomPhone(),
          personPhone: this.getRandomPhone(),
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

  getRandomPhone() {
    //console.log(Math.floor(Math.random() * 899999 + 100000).toString());
    return Math.floor(Math.random() * 899999 + 100000).toString();
  }
  run2 = () => {
    const data = this.getData2();
    axios
      .post(
        'https://enfluxy.dsrc.ir/apps/PortalDataManagement/News/CreateNews/createNews',
        data,
        {
          headers: {
            https:
              'JSESSIONID=9A34292F76D891CC20AE99C9BD1DC767; cookiesession1=678B28D78AC62021182BD36FF6527DD4; moqui.visitor=f418448d-238a-42e9-b6c3-84dfd726cb26;',
          },
        },
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  run = async (data, counter: number) => {
    axios
      .post('https://wiki.dsrc.ir/outapps/signup/register/createPerson', data, {
        headers: {
          https:
            'JSESSIONID=FFD6E986EE77DFCA02BD0A90490C2718; cookiesession1=678B28786F707829AAD97B4933F87933; moqui.visitor=52eee871-3cf4-44e7-93a9-3057c659a7f8;',
        },
      })

      .then((res) => {
        // console.log(res.data);
        //return res.data;
      })
      .catch((err) => {
        console.log('error:' + (++this.countErr).toString());
        // return err;
      });
    //console.log(counter);
  };

  random = (counter: number) => {
    const size = counter.toString().length;
    if (size < 10) {
      return '0'.repeat(10 - size) + counter.toString();
    }
    return counter.toString();
  };
}
