FROM ubuntu:20.04

# tested with ubuntu20.04, python 3.8, flask 2.2.2, nodejs v18.12.1.

# update packages
RUN set -x && \
    apt update && \
    apt upgrade -y

# install command
RUN set -x && \
    apt install -y wget && \
    apt install -y sudo

# install package
RUN apt install -y vim
RUN apt install -y git
RUN apt install -y curl

# install miniconda
RUN set -x
RUN wget https://repo.anaconda.com/miniconda/Miniconda3-py38_22.11.1-1-Linux-x86_64.sh
RUN bash Miniconda3-py38_22.11.1-1-Linux-x86_64.sh -b
RUN rm Miniconda3-py38_22.11.1-1-Linux-x86_64.sh

# path setting
ENV PATH $PATH:/root/miniconda3/bin

# install nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN apt install -y nodejs

# no cache below
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" /dev/null

# clone repository
RUN git clone -b feature https://github.com/welshonion/team-project-l.git

# npm install 
WORKDIR /team-project-l/frontend
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" /dev/null
RUN npm install --save --legacy-peer-deps

# pip
WORKDIR /team-project-l/backend
RUN pip install -r requirements.txt

WORKDIR /team-project-l