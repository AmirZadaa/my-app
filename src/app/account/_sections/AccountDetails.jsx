
import MyDetails from '@/app/account/_sections/MyDetails';
import MyPassword from '@/app/account/_sections/MyPassword';
import MyFavourites from '@/app/account/_sections/MyFavourites';
import MyAddress from '@/app/account/_sections/MyAddress';
import MyOrder from '@/app/account/_sections/MyOrder';

const render = {
    "Notes": () => <MyDetails />,
    "Code": () => <MyPassword />,
    "Q/A": () => <MyFavourites />,
    "Quiz": () => <MyAddress />,
    "Assignment": () => <MyOrder />,
}

export default function AccountDetails({ selectedSection }) {


    return (
        <section className='container mx-auto'>
            {render[selectedSection]()}
        </section>
    );
}