import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conhecao os profissionais"}
        subtitle={
          "Preencha o seu endereco e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Matheus"}
        picture={"https://github.com/matheuszbb.png"}
        rating={5}
        description={"Monteirópolis"}
      />
    </div>
  );
}
