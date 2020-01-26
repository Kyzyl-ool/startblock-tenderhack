# Chain Metric

[![N|Solid](image/Team.png)](http://startblock.online)

# Structure

<ol type="1" style="font-size: x-large;">
  <li> <a href="https://github.com/Kyzyl-ool/startblock-tenderhack#проблема">Проблема</a>
  <li> <a href="https://github.com/Kyzyl-ool/startblock-tenderhack#решение">Решение</a>
  <li> <a href="https://github.com/Kyzyl-ool/startblock-tenderhack#алгоритм-совместных-покупок">Алгоритм совместных покупок</a>
  <li> <a href="https://github.com/Kyzyl-ool/startblock-tenderhack#дополнительный-функционал">Дополнительный функционал</a>
  <li> <a href="https://github.com/Kyzyl-ool/startblock-tenderhack#демо">Демо</a>
  <li> <a href="https://github.com/Kyzyl-ool/startblock-tenderhack#техническое-описание">Техническое описание</a>
  <li> <a href="https://github.com/Kyzyl-ool/startblock-tenderhack#инструкция-по-установке">Инструкция по установке</a>
  <li> <a href="https://github.com/Kyzyl-ool/startblock-tenderhack#команда">Команда</a>


# Проблема
We are team **StartBlock** and we solved the **TrustMe**  Fantom task on the Serial Hacking Grand Final.

Today there are several problems with evaluating blockchain performance:

- Security
- Reliability
- Speed


# Решение

We have created a project in which any user can check the performance of the blockchain on 3.5 and 20 nodes. At the moment, the project is comparing two blockchains (Fantom and Exonum). We carry out a set of transactions through the data of the blockchain and at the output we get a svg file with a comparison of key indicators of the blockchain.

<a href="https://www.youtube.com/watch?v=-3xvlPHu1Rg&feature=youtu.be">Video-presentation of the TrustMe</a>

# Алгоритм совместных покупок

Exonum provides a reliable blockchain creation framework, that can be used as in our example.
We start several nodes which log information into log files. 

Our next stage code process the information from logs and generate svg files.

Exonum shows good performance on a local machine with nodes communication over localhost network.

TPS is several hundred transactions for small number of nodes. 
Consensus time is about 0.01 seconds for small number of nodes.

# Дополнительный функционал

Fantom blockchain can be easily configured for interaction with our svg-generation code.

The timestamped transaction information needs to be logged in files which then will be processed to generate svg.

![N|Solid](image/svg.png)

# Демо

At this stage, we use rust to generate svg and in a convenient human-readable form to track the key parameters of the blockchain, namely: number of nodes, TPS , time to finality, CPU usage, memory usage, disk usage. The program reads these parameters from the logging that generate blockchains. 

# Техническое описание

# Инструкция по установке
Requirements:
1. rustc 1.39.0-nightly (97e58c0d3 2019-09-20)
2. exonum
3. fantom

For running nodes on your local machine
1. cd backend
2. cargo insstall --path .
3. ./launch.sh %number of nodes%
4. Open a browser at address stated in terminal


# Команда

**TrustMe** is a complete complete product for checking the main indicators of the blockchain

<a href="https://www.youtube.com/watch?v=-3xvlPHu1Rg&feature=youtu.be">Video-presentation of the TrustMe</a>

![N|Solid](image/Screenshot.png)


We implemented all this within the framework of the hackathon CryptoBazar Serial Hacking with the active interaction of the whole team!

# Team

[![N|Solid](image/Team.png)](http://startblock.online)
