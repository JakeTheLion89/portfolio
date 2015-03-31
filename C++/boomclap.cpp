#include "iostream"
#include <unistd.h>
#include "string"

void boomClap1(){
    std::cout << "BOOM " << std::flush;
    usleep(800000);
    std::cout << "CLAP\n" << std::flush;
    usleep(800000);
}

void boomClap2(){
    std::cout << "BOOM\n" << std::flush;
    usleep(800000);
    std::cout << "\t\tCLAP\n" << std::flush;
    usleep(800000);
}

void boomClap3(){
    std::cout << "\t\t☆ BOOM☆ " << std::flush;
    usleep(800000);
    std::cout << "\t\t★ CLAP★\n" << std::flush;
    usleep(800000);
}

void somh1(){
    std::cout << "Sound " << std::flush;
    usleep(100000);
    std::cout << "of my " << std::flush;
    usleep(500000);
    std::cout << "heart!\n" << std::flush;
    usleep(400000);
}

void somh2(){
    std::cout << "Sound " << std::flush;
    usleep(100000);
    std::cout << "of my " << std::flush;
    usleep(800000);
    std::cout << "<3!\n" << std::flush;
    usleep(400000);
}

void somh3(){
    std::cout << "♫Sound " << std::flush;
    usleep(100000);
    std::cout << "\n\tof my " << std::flush;
    usleep(500000);
    std::cout << "\n\t♥" << std::flush;
    usleep(400000);
}

void mmfg1(){
    std::cout << "Make " << std::flush;
    usleep(100000);
    std::cout << "me feel " << std::flush;
    usleep(800000);
    std::cout << "good!\n" << std::flush;
    usleep(400000);
}

void mmfg2(){
    std::cout << "Make " << std::flush;
    usleep(100000);
    std::cout << "me feel " << std::flush;
    usleep(800000);
    std::cout << "good! =D \t " << std::flush;
    usleep(400000);
}

void mmfg3(){
    std::cout << "Make " << std::flush;
    usleep(100000);
    std::cout << "me feel " << std::flush;
    usleep(800000);
    std::cout << " \t ☼ good ☼ \t " << std::flush;
    usleep(400000);
}

void tbgo1(){
    std::cout << "The beat goes on..." << std::flush;
    usleep(800000);
    for (int i=0;i<3;i++)
    {
        std::cout << "and on..." << std::flush;
        usleep(400000);
    }
    std::cout << "and\n" << std::flush;
    usleep(130000);
}

void tbgo2(){
    std::cout << "\nThe beat goes on...\n" << std::flush;
    usleep(800000);
    for (int i=0;i<3;i++)
    {
        std::cout << "\tand on...♪\n" << std::flush;
        usleep(400000);
    }
    std::cout << "\t\tand... " << std::flush;
    usleep(130000);
}

void  cotm1(){
    for(int n=0;n<2;n++)
    {
        std::cout << "Come on..." << std::flush;
        usleep(900000);
        std::cout << "to me\n" << std::flush;
        usleep(600000);
    }
    std::cout << "NOW" << std::endl;
    usleep(500000);
}

void  cotm2(){
    for(int n=0;n<2;n++)
    {
        if(n==1)
            std::cout <<'\n' << std::flush;
        std::cout << "Come on..." << std::flush;
        usleep(900000);
        std::cout << "\n\t\tto me " << std::flush;
        usleep(600000);
    }
    std::cout << "\t\t∞ NOW ∞" << std::endl;
    usleep(500000);
}

int main()
{
    bool forever = true;

    while(forever)
    {
        boomClap1();
        somh1();
        tbgo1();
        boomClap2();
        mmfg1();
        cotm1();
        boomClap2();
        somh2();
        tbgo2();
        boomClap1();
        mmfg2();
        cotm2();
        boomClap3();
        somh3();
        tbgo2();
        boomClap2();
        mmfg3();
        cotm2();

    }
    return 0;
}
