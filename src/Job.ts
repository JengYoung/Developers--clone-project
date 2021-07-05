interface jobDataFormat {
    name: string;
    url: string;
    image: string;
    jobName: string;
    requirements: Array<string>;
}

interface Names {
    [name: string]: string;
}
interface SkillDatasFormat {
    0: {
        skills: Array<string>;
    };
};

export default class Job {
    private readonly names: Names;
    constructor(private readonly jobDatas: Array<jobDataFormat>, private readonly SkillDatas: SkillDatasFormat) {
        this.names = {
            jobHeader: 'job__header',
            jobTitle: 'job__title',
            jobMoreBtn: 'job__more-btn',
            jobSkills: 'job__skills',
            jobSkill: 'job__skill',
            jobCards: 'job__cards',
            jobCard: 'job__card',
            jobLogoBox: 'job__logo-box',
            jobCardLogo: 'job__card-logo',
            jobCardInfo: 'job__card-info',
            jobCardTitle: 'job__card-title',
            jobCardBrand: 'job__card-brand',
            jobRequirements: 'job__requirements',
            jobRequirement: 'job__requirement'
        }
        this.render();
    }
    customCreateElement(tag: string, name: string): HTMLElement {
        const elem = document.createElement(tag);
        elem.className = name;
        return elem;
    };
    customAppendChild(parent: HTMLElement, ...elems: Array<HTMLElement>) {
        [...elems].map(elem => parent.appendChild(elem));
    };
    render() {
        const renderSkillsComponent = (() => {
            const $jobSkills = this.customCreateElement('ul', this.names.jobSkills);
            const datas = this.SkillDatas[0].skills;
            datas.map(data => {
                const $jobSkill = this.customCreateElement('li', this.names.jobSkill);
                $jobSkill.textContent = data;
                $jobSkills.appendChild($jobSkill)
            });
            document.querySelector('.job').appendChild($jobSkills);
        })();

        const renderCardsComponent = (() => {
            const $jobCards = this.customCreateElement('ul',this.names.jobCards);
            this.jobDatas.map((jobData: jobDataFormat) => {
                const $jobCard = this.customCreateElement('li',this.names.jobCard);

                const $jobLogoBox = this.customCreateElement('div',this.names.jobLogoBox);
                const $jobCardLogo = this.customCreateElement('img', this.names.jobCardLogo);
                $jobCardLogo.setAttribute('src', jobData.image);
                $jobCardLogo.setAttribute('alt', "채용회사 로고 이미지");

                // job__logo-box 생성
                $jobLogoBox.appendChild($jobCardLogo);

                const $jobCardInfo = this.customCreateElement('section', this.names.jobCardInfo);
                const $jobCardTitle = this.customCreateElement('h4', this.names.jobCardTitle);
                $jobCardTitle.textContent = jobData.jobName;
                const $jobCardBrand = this.customCreateElement('h4', this.names.jobCardBrand);
                $jobCardBrand.textContent = jobData.name;
                const $jobRequirements = this.customCreateElement('ul', this.names.jobRequirements);
                jobData.requirements.map((requirement: string) => {
                    const $jobRequirement = this.customCreateElement('li', this.names.jobRequirement);
                    $jobRequirement.textContent = requirement;
                    $jobRequirements.appendChild($jobRequirement);
                })

                // job__card-info 생성
                this.customAppendChild($jobCardInfo, $jobCardTitle, $jobCardBrand, $jobRequirements);

                // 결과적으로 job__card 생성
                this.customAppendChild($jobCard, $jobLogoBox, $jobCardInfo)
                
                // job__card를 job__cards 안에 넣음
                $jobCards.appendChild($jobCard);
            })
            document.querySelector('.job').appendChild($jobCards)
        })();
    }
}