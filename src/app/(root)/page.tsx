import React from 'react';
import HeaderBox from "@/components/header_box";
import TotalBalanceBox from "@/components/total-balance-box";
import RightSidebar from "@/components/right-sidebar";

const Page = () => {
    const loggedIn = {
        firstName: 'Rendo',
        lastName: 'Sama',
        email: 'rendosams@example.com',
    };

    return (
        <section className={'home'}>
            <div className={'home-content'}>
                <header className={'home-header'}>
                    <HeaderBox
                        type={'greeting'}
                        title={'Welcome'}
                        user={loggedIn?.firstName || 'Guest'}
                        subtext={'Access and Manage your account and transactions efficiently'}
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1259.24}
                    />
                </header>
                {/*TODO: Recent Transactions*/}
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={
                    [
                        {
                            currentBalance: 123.50,
                        },
                        {
                            currentBalance: 500,
                        }
                    ]
                }
            />
        </section>
    );
};

export default Page;