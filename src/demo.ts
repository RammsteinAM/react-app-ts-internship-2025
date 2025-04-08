/* eslint-disable @typescript-eslint/no-unused-vars */
//// @ts-nocheck

type Zero = [];
type One = [1];
type Two = [1, 1];
type AddOne<T extends unknown[]> = [...T, 1];

type TTT = [string, string?];

type ASD = string & number;

const asd: ASD;
