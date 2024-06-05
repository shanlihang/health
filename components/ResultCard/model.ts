export interface TableData {
    blood?: Blood;
    CreatedAt?: string;
    DeletedAt?: null;
    deviceID?: string;
    dgc?: string;
    ecg?: Ecg;
    examNo?: string;
    fat?: Fat;
    hw?: Hw;
    ID?: number;
    ns?: string;
    semang?: string;
    sfz?: Sfz;
    shili?: Shili;
    spo2?: Spo2;
    tiwen?: string;
    UpdatedAt?: string;
    xlcp?: Xlcp;
    xt?: Xt;
    zybs?: string;
}

export interface Blood {
    high?: string;
    low?: string;
    rate?: string;
    rhigh?: string;
    rlow?: string;
}

export interface Ecg {
    data?: string;
    len?: number;
    result?: string;
}

export interface Fat {
    dbz?: string;
    dbzlv?: string;
    gl?: string;
    gy?: string;
    jcdx?: string;
    jrl?: string;
    jrlv?: string;
    nzzf?: string;
    qztz?: string;
    tsfl?: string;
    tsflv?: string;
    xbnyl?: string;
    xbnylv?: string;
    xbwyl?: string;
    xbwylv?: string;
    zfl?: string;
    zflv?: string;
}

export interface Hw {
    bmi?: string;
    height?: string;
    weight?: string;
}

export interface Sfz {
    age?: string;
    birthday?: string;
    idnumber?: string;
    name?: string;
    nation?: string;
    sex?: string;
}

export interface Shili {
    left_eye?: string;
    right_eye?: string;
}

export interface Spo2 {
    sp?: string;
}

export interface Xlcp {
    eq?: string;
    hfxx?: string;
    hmdjl?: string;
    lnyy?: string;
    pstr?: string;
    qxjkd?: string;
    rgza?: string;
    shmyd?: string;
    smzkpg?: string;
    ucla?: string;
    zcjkpd?: string;
    zpyy?: string;
}

export interface Xt {
    type?: string;
    value?: string;
}