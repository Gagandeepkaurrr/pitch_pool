
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pitch
 * 
 */
export type Pitch = $Result.DefaultSelection<Prisma.$PitchPayload>
/**
 * Model Investment
 * 
 */
export type Investment = $Result.DefaultSelection<Prisma.$InvestmentPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  INVESTOR: 'INVESTOR',
  INNOVATOR: 'INNOVATOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const KYCStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type KYCStatus = (typeof KYCStatus)[keyof typeof KYCStatus]


export const PitchStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  FUNDED: 'FUNDED'
};

export type PitchStatus = (typeof PitchStatus)[keyof typeof PitchStatus]


export const InvestmentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type InvestmentStatus = (typeof InvestmentStatus)[keyof typeof InvestmentStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type KYCStatus = $Enums.KYCStatus

export const KYCStatus: typeof $Enums.KYCStatus

export type PitchStatus = $Enums.PitchStatus

export const PitchStatus: typeof $Enums.PitchStatus

export type InvestmentStatus = $Enums.InvestmentStatus

export const InvestmentStatus: typeof $Enums.InvestmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pitch`: Exposes CRUD operations for the **Pitch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pitches
    * const pitches = await prisma.pitch.findMany()
    * ```
    */
  get pitch(): Prisma.PitchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investment`: Exposes CRUD operations for the **Investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investment.findMany()
    * ```
    */
  get investment(): Prisma.InvestmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Pitch: 'Pitch',
    Investment: 'Investment',
    Question: 'Question',
    Badge: 'Badge'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pitch" | "investment" | "question" | "badge"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pitch: {
        payload: Prisma.$PitchPayload<ExtArgs>
        fields: Prisma.PitchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PitchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PitchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          findFirst: {
            args: Prisma.PitchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PitchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          findMany: {
            args: Prisma.PitchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>[]
          }
          create: {
            args: Prisma.PitchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          createMany: {
            args: Prisma.PitchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PitchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>[]
          }
          delete: {
            args: Prisma.PitchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          update: {
            args: Prisma.PitchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          deleteMany: {
            args: Prisma.PitchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PitchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PitchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>[]
          }
          upsert: {
            args: Prisma.PitchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          aggregate: {
            args: Prisma.PitchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePitch>
          }
          groupBy: {
            args: Prisma.PitchGroupByArgs<ExtArgs>
            result: $Utils.Optional<PitchGroupByOutputType>[]
          }
          count: {
            args: Prisma.PitchCountArgs<ExtArgs>
            result: $Utils.Optional<PitchCountAggregateOutputType> | number
          }
        }
      }
      Investment: {
        payload: Prisma.$InvestmentPayload<ExtArgs>
        fields: Prisma.InvestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findFirst: {
            args: Prisma.InvestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findMany: {
            args: Prisma.InvestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          create: {
            args: Prisma.InvestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          createMany: {
            args: Prisma.InvestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          delete: {
            args: Prisma.InvestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          update: {
            args: Prisma.InvestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment>
          }
          groupBy: {
            args: Prisma.InvestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pitch?: PitchOmit
    investment?: InvestmentOmit
    question?: QuestionOmit
    badge?: BadgeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pitches: number
    investments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitches?: boolean | UserCountOutputTypeCountPitchesArgs
    investments?: boolean | UserCountOutputTypeCountInvestmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPitchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PitchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }


  /**
   * Count Type PitchCountOutputType
   */

  export type PitchCountOutputType = {
    investments: number
    questions: number
  }

  export type PitchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | PitchCountOutputTypeCountInvestmentsArgs
    questions?: boolean | PitchCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * PitchCountOutputType without action
   */
  export type PitchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchCountOutputType
     */
    select?: PitchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PitchCountOutputType without action
   */
  export type PitchCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }

  /**
   * PitchCountOutputType without action
   */
  export type PitchCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type BadgeCountOutputType
   */

  export type BadgeCountOutputType = {
    users: number
  }

  export type BadgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BadgeCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     */
    select?: BadgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    kycStatus: $Enums.KYCStatus | null
    kycDocuments: string | null
    badgeId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    kycStatus: $Enums.KYCStatus | null
    kycDocuments: string | null
    badgeId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    kycStatus: number
    kycDocuments: number
    badgeId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    kycStatus?: true
    kycDocuments?: true
    badgeId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    kycStatus?: true
    kycDocuments?: true
    badgeId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    kycStatus?: true
    kycDocuments?: true
    badgeId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    kycStatus: $Enums.KYCStatus
    kycDocuments: string
    badgeId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kycStatus?: boolean
    kycDocuments?: boolean
    badgeId?: boolean
    pitches?: boolean | User$pitchesArgs<ExtArgs>
    investments?: boolean | User$investmentsArgs<ExtArgs>
    badge?: boolean | User$badgeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kycStatus?: boolean
    kycDocuments?: boolean
    badgeId?: boolean
    badge?: boolean | User$badgeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kycStatus?: boolean
    kycDocuments?: boolean
    badgeId?: boolean
    badge?: boolean | User$badgeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kycStatus?: boolean
    kycDocuments?: boolean
    badgeId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "createdAt" | "updatedAt" | "kycStatus" | "kycDocuments" | "badgeId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitches?: boolean | User$pitchesArgs<ExtArgs>
    investments?: boolean | User$investmentsArgs<ExtArgs>
    badge?: boolean | User$badgeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | User$badgeArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | User$badgeArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pitches: Prisma.$PitchPayload<ExtArgs>[]
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
      badge: Prisma.$BadgePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      kycStatus: $Enums.KYCStatus
      kycDocuments: string
      badgeId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pitches<T extends User$pitchesArgs<ExtArgs> = {}>(args?: Subset<T, User$pitchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    investments<T extends User$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    badge<T extends User$badgeArgs<ExtArgs> = {}>(args?: Subset<T, User$badgeArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly kycStatus: FieldRef<"User", 'KYCStatus'>
    readonly kycDocuments: FieldRef<"User", 'String'>
    readonly badgeId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pitches
   */
  export type User$pitchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    where?: PitchWhereInput
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    cursor?: PitchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * User.investments
   */
  export type User$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * User.badge
   */
  export type User$badgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    where?: BadgeWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pitch
   */

  export type AggregatePitch = {
    _count: PitchCountAggregateOutputType | null
    _avg: PitchAvgAggregateOutputType | null
    _sum: PitchSumAggregateOutputType | null
    _min: PitchMinAggregateOutputType | null
    _max: PitchMaxAggregateOutputType | null
  }

  export type PitchAvgAggregateOutputType = {
    aiScore: number | null
  }

  export type PitchSumAggregateOutputType = {
    aiScore: number | null
  }

  export type PitchMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    videoUrl: string | null
    status: $Enums.PitchStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
    aiScore: number | null
  }

  export type PitchMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    videoUrl: string | null
    status: $Enums.PitchStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
    aiScore: number | null
  }

  export type PitchCountAggregateOutputType = {
    id: number
    title: number
    description: number
    videoUrl: number
    status: number
    createdAt: number
    updatedAt: number
    creatorId: number
    aiScore: number
    _all: number
  }


  export type PitchAvgAggregateInputType = {
    aiScore?: true
  }

  export type PitchSumAggregateInputType = {
    aiScore?: true
  }

  export type PitchMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    videoUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    aiScore?: true
  }

  export type PitchMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    videoUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    aiScore?: true
  }

  export type PitchCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    videoUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    aiScore?: true
    _all?: true
  }

  export type PitchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pitch to aggregate.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pitches
    **/
    _count?: true | PitchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PitchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PitchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PitchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PitchMaxAggregateInputType
  }

  export type GetPitchAggregateType<T extends PitchAggregateArgs> = {
        [P in keyof T & keyof AggregatePitch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePitch[P]>
      : GetScalarType<T[P], AggregatePitch[P]>
  }




  export type PitchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PitchWhereInput
    orderBy?: PitchOrderByWithAggregationInput | PitchOrderByWithAggregationInput[]
    by: PitchScalarFieldEnum[] | PitchScalarFieldEnum
    having?: PitchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PitchCountAggregateInputType | true
    _avg?: PitchAvgAggregateInputType
    _sum?: PitchSumAggregateInputType
    _min?: PitchMinAggregateInputType
    _max?: PitchMaxAggregateInputType
  }

  export type PitchGroupByOutputType = {
    id: string
    title: string
    description: string
    videoUrl: string
    status: $Enums.PitchStatus
    createdAt: Date
    updatedAt: Date
    creatorId: string
    aiScore: number | null
    _count: PitchCountAggregateOutputType | null
    _avg: PitchAvgAggregateOutputType | null
    _sum: PitchSumAggregateOutputType | null
    _min: PitchMinAggregateOutputType | null
    _max: PitchMaxAggregateOutputType | null
  }

  type GetPitchGroupByPayload<T extends PitchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PitchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PitchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PitchGroupByOutputType[P]>
            : GetScalarType<T[P], PitchGroupByOutputType[P]>
        }
      >
    >


  export type PitchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    aiScore?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    investments?: boolean | Pitch$investmentsArgs<ExtArgs>
    questions?: boolean | Pitch$questionsArgs<ExtArgs>
    _count?: boolean | PitchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitch"]>

  export type PitchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    aiScore?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitch"]>

  export type PitchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    aiScore?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitch"]>

  export type PitchSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    aiScore?: boolean
  }

  export type PitchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "videoUrl" | "status" | "createdAt" | "updatedAt" | "creatorId" | "aiScore", ExtArgs["result"]["pitch"]>
  export type PitchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    investments?: boolean | Pitch$investmentsArgs<ExtArgs>
    questions?: boolean | Pitch$questionsArgs<ExtArgs>
    _count?: boolean | PitchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PitchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PitchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PitchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pitch"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      videoUrl: string
      status: $Enums.PitchStatus
      createdAt: Date
      updatedAt: Date
      creatorId: string
      aiScore: number | null
    }, ExtArgs["result"]["pitch"]>
    composites: {}
  }

  type PitchGetPayload<S extends boolean | null | undefined | PitchDefaultArgs> = $Result.GetResult<Prisma.$PitchPayload, S>

  type PitchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PitchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PitchCountAggregateInputType | true
    }

  export interface PitchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pitch'], meta: { name: 'Pitch' } }
    /**
     * Find zero or one Pitch that matches the filter.
     * @param {PitchFindUniqueArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PitchFindUniqueArgs>(args: SelectSubset<T, PitchFindUniqueArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pitch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PitchFindUniqueOrThrowArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PitchFindUniqueOrThrowArgs>(args: SelectSubset<T, PitchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pitch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchFindFirstArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PitchFindFirstArgs>(args?: SelectSubset<T, PitchFindFirstArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pitch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchFindFirstOrThrowArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PitchFindFirstOrThrowArgs>(args?: SelectSubset<T, PitchFindFirstOrThrowArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pitches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pitches
     * const pitches = await prisma.pitch.findMany()
     * 
     * // Get first 10 Pitches
     * const pitches = await prisma.pitch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pitchWithIdOnly = await prisma.pitch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PitchFindManyArgs>(args?: SelectSubset<T, PitchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pitch.
     * @param {PitchCreateArgs} args - Arguments to create a Pitch.
     * @example
     * // Create one Pitch
     * const Pitch = await prisma.pitch.create({
     *   data: {
     *     // ... data to create a Pitch
     *   }
     * })
     * 
     */
    create<T extends PitchCreateArgs>(args: SelectSubset<T, PitchCreateArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pitches.
     * @param {PitchCreateManyArgs} args - Arguments to create many Pitches.
     * @example
     * // Create many Pitches
     * const pitch = await prisma.pitch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PitchCreateManyArgs>(args?: SelectSubset<T, PitchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pitches and returns the data saved in the database.
     * @param {PitchCreateManyAndReturnArgs} args - Arguments to create many Pitches.
     * @example
     * // Create many Pitches
     * const pitch = await prisma.pitch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pitches and only return the `id`
     * const pitchWithIdOnly = await prisma.pitch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PitchCreateManyAndReturnArgs>(args?: SelectSubset<T, PitchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pitch.
     * @param {PitchDeleteArgs} args - Arguments to delete one Pitch.
     * @example
     * // Delete one Pitch
     * const Pitch = await prisma.pitch.delete({
     *   where: {
     *     // ... filter to delete one Pitch
     *   }
     * })
     * 
     */
    delete<T extends PitchDeleteArgs>(args: SelectSubset<T, PitchDeleteArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pitch.
     * @param {PitchUpdateArgs} args - Arguments to update one Pitch.
     * @example
     * // Update one Pitch
     * const pitch = await prisma.pitch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PitchUpdateArgs>(args: SelectSubset<T, PitchUpdateArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pitches.
     * @param {PitchDeleteManyArgs} args - Arguments to filter Pitches to delete.
     * @example
     * // Delete a few Pitches
     * const { count } = await prisma.pitch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PitchDeleteManyArgs>(args?: SelectSubset<T, PitchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pitches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pitches
     * const pitch = await prisma.pitch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PitchUpdateManyArgs>(args: SelectSubset<T, PitchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pitches and returns the data updated in the database.
     * @param {PitchUpdateManyAndReturnArgs} args - Arguments to update many Pitches.
     * @example
     * // Update many Pitches
     * const pitch = await prisma.pitch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pitches and only return the `id`
     * const pitchWithIdOnly = await prisma.pitch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PitchUpdateManyAndReturnArgs>(args: SelectSubset<T, PitchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pitch.
     * @param {PitchUpsertArgs} args - Arguments to update or create a Pitch.
     * @example
     * // Update or create a Pitch
     * const pitch = await prisma.pitch.upsert({
     *   create: {
     *     // ... data to create a Pitch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pitch we want to update
     *   }
     * })
     */
    upsert<T extends PitchUpsertArgs>(args: SelectSubset<T, PitchUpsertArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pitches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchCountArgs} args - Arguments to filter Pitches to count.
     * @example
     * // Count the number of Pitches
     * const count = await prisma.pitch.count({
     *   where: {
     *     // ... the filter for the Pitches we want to count
     *   }
     * })
    **/
    count<T extends PitchCountArgs>(
      args?: Subset<T, PitchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PitchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pitch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PitchAggregateArgs>(args: Subset<T, PitchAggregateArgs>): Prisma.PrismaPromise<GetPitchAggregateType<T>>

    /**
     * Group by Pitch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PitchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PitchGroupByArgs['orderBy'] }
        : { orderBy?: PitchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PitchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPitchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pitch model
   */
  readonly fields: PitchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pitch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PitchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    investments<T extends Pitch$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, Pitch$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends Pitch$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Pitch$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pitch model
   */
  interface PitchFieldRefs {
    readonly id: FieldRef<"Pitch", 'String'>
    readonly title: FieldRef<"Pitch", 'String'>
    readonly description: FieldRef<"Pitch", 'String'>
    readonly videoUrl: FieldRef<"Pitch", 'String'>
    readonly status: FieldRef<"Pitch", 'PitchStatus'>
    readonly createdAt: FieldRef<"Pitch", 'DateTime'>
    readonly updatedAt: FieldRef<"Pitch", 'DateTime'>
    readonly creatorId: FieldRef<"Pitch", 'String'>
    readonly aiScore: FieldRef<"Pitch", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Pitch findUnique
   */
  export type PitchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch findUniqueOrThrow
   */
  export type PitchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch findFirst
   */
  export type PitchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pitches.
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pitches.
     */
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * Pitch findFirstOrThrow
   */
  export type PitchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pitches.
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pitches.
     */
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * Pitch findMany
   */
  export type PitchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitches to fetch.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pitches.
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * Pitch create
   */
  export type PitchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * The data needed to create a Pitch.
     */
    data: XOR<PitchCreateInput, PitchUncheckedCreateInput>
  }

  /**
   * Pitch createMany
   */
  export type PitchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pitches.
     */
    data: PitchCreateManyInput | PitchCreateManyInput[]
  }

  /**
   * Pitch createManyAndReturn
   */
  export type PitchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * The data used to create many Pitches.
     */
    data: PitchCreateManyInput | PitchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pitch update
   */
  export type PitchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * The data needed to update a Pitch.
     */
    data: XOR<PitchUpdateInput, PitchUncheckedUpdateInput>
    /**
     * Choose, which Pitch to update.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch updateMany
   */
  export type PitchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pitches.
     */
    data: XOR<PitchUpdateManyMutationInput, PitchUncheckedUpdateManyInput>
    /**
     * Filter which Pitches to update
     */
    where?: PitchWhereInput
    /**
     * Limit how many Pitches to update.
     */
    limit?: number
  }

  /**
   * Pitch updateManyAndReturn
   */
  export type PitchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * The data used to update Pitches.
     */
    data: XOR<PitchUpdateManyMutationInput, PitchUncheckedUpdateManyInput>
    /**
     * Filter which Pitches to update
     */
    where?: PitchWhereInput
    /**
     * Limit how many Pitches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pitch upsert
   */
  export type PitchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * The filter to search for the Pitch to update in case it exists.
     */
    where: PitchWhereUniqueInput
    /**
     * In case the Pitch found by the `where` argument doesn't exist, create a new Pitch with this data.
     */
    create: XOR<PitchCreateInput, PitchUncheckedCreateInput>
    /**
     * In case the Pitch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PitchUpdateInput, PitchUncheckedUpdateInput>
  }

  /**
   * Pitch delete
   */
  export type PitchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter which Pitch to delete.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch deleteMany
   */
  export type PitchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pitches to delete
     */
    where?: PitchWhereInput
    /**
     * Limit how many Pitches to delete.
     */
    limit?: number
  }

  /**
   * Pitch.investments
   */
  export type Pitch$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Pitch.questions
   */
  export type Pitch$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Pitch without action
   */
  export type PitchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
  }


  /**
   * Model Investment
   */

  export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  export type InvestmentAvgAggregateOutputType = {
    amount: number | null
  }

  export type InvestmentSumAggregateOutputType = {
    amount: number | null
  }

  export type InvestmentMinAggregateOutputType = {
    id: string | null
    amount: number | null
    status: $Enums.InvestmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    investorId: string | null
    pitchId: string | null
  }

  export type InvestmentMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    status: $Enums.InvestmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    investorId: string | null
    pitchId: string | null
  }

  export type InvestmentCountAggregateOutputType = {
    id: number
    amount: number
    status: number
    createdAt: number
    updatedAt: number
    investorId: number
    pitchId: number
    _all: number
  }


  export type InvestmentAvgAggregateInputType = {
    amount?: true
  }

  export type InvestmentSumAggregateInputType = {
    amount?: true
  }

  export type InvestmentMinAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    investorId?: true
    pitchId?: true
  }

  export type InvestmentMaxAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    investorId?: true
    pitchId?: true
  }

  export type InvestmentCountAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    investorId?: true
    pitchId?: true
    _all?: true
  }

  export type InvestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment to aggregate.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentMaxAggregateInputType
  }

  export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment[P]>
      : GetScalarType<T[P], AggregateInvestment[P]>
  }




  export type InvestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithAggregationInput | InvestmentOrderByWithAggregationInput[]
    by: InvestmentScalarFieldEnum[] | InvestmentScalarFieldEnum
    having?: InvestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentCountAggregateInputType | true
    _avg?: InvestmentAvgAggregateInputType
    _sum?: InvestmentSumAggregateInputType
    _min?: InvestmentMinAggregateInputType
    _max?: InvestmentMaxAggregateInputType
  }

  export type InvestmentGroupByOutputType = {
    id: string
    amount: number
    status: $Enums.InvestmentStatus
    createdAt: Date
    updatedAt: Date
    investorId: string
    pitchId: string
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    investorId?: boolean
    pitchId?: boolean
    investor?: boolean | UserDefaultArgs<ExtArgs>
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    investorId?: boolean
    pitchId?: boolean
    investor?: boolean | UserDefaultArgs<ExtArgs>
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    investorId?: boolean
    pitchId?: boolean
    investor?: boolean | UserDefaultArgs<ExtArgs>
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectScalar = {
    id?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    investorId?: boolean
    pitchId?: boolean
  }

  export type InvestmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "status" | "createdAt" | "updatedAt" | "investorId" | "pitchId", ExtArgs["result"]["investment"]>
  export type InvestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investor?: boolean | UserDefaultArgs<ExtArgs>
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investor?: boolean | UserDefaultArgs<ExtArgs>
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investor?: boolean | UserDefaultArgs<ExtArgs>
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }

  export type $InvestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment"
    objects: {
      investor: Prisma.$UserPayload<ExtArgs>
      pitch: Prisma.$PitchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      status: $Enums.InvestmentStatus
      createdAt: Date
      updatedAt: Date
      investorId: string
      pitchId: string
    }, ExtArgs["result"]["investment"]>
    composites: {}
  }

  type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPayload, S>

  type InvestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentCountAggregateInputType | true
    }

  export interface InvestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment'], meta: { name: 'Investment' } }
    /**
     * Find zero or one Investment that matches the filter.
     * @param {InvestmentFindUniqueArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentFindUniqueArgs>(args: SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentFindUniqueOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentFindFirstArgs>(args?: SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investment.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWithIdOnly = await prisma.investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentFindManyArgs>(args?: SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investment.
     * @param {InvestmentCreateArgs} args - Arguments to create a Investment.
     * @example
     * // Create one Investment
     * const Investment = await prisma.investment.create({
     *   data: {
     *     // ... data to create a Investment
     *   }
     * })
     * 
     */
    create<T extends InvestmentCreateArgs>(args: SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investments.
     * @param {InvestmentCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentCreateManyArgs>(args?: SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investment.
     * @param {InvestmentDeleteArgs} args - Arguments to delete one Investment.
     * @example
     * // Delete one Investment
     * const Investment = await prisma.investment.delete({
     *   where: {
     *     // ... filter to delete one Investment
     *   }
     * })
     * 
     */
    delete<T extends InvestmentDeleteArgs>(args: SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investment.
     * @param {InvestmentUpdateArgs} args - Arguments to update one Investment.
     * @example
     * // Update one Investment
     * const investment = await prisma.investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentUpdateArgs>(args: SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentUpdateManyArgs>(args: SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {InvestmentUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investment.
     * @param {InvestmentUpsertArgs} args - Arguments to update or create a Investment.
     * @example
     * // Update or create a Investment
     * const investment = await prisma.investment.upsert({
     *   create: {
     *     // ... data to create a Investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentUpsertArgs>(args: SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investment.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentCountArgs>(
      args?: Subset<T, InvestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentAggregateArgs>(args: Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>

    /**
     * Group by Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment model
   */
  readonly fields: InvestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    investor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pitch<T extends PitchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PitchDefaultArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Investment model
   */
  interface InvestmentFieldRefs {
    readonly id: FieldRef<"Investment", 'String'>
    readonly amount: FieldRef<"Investment", 'Float'>
    readonly status: FieldRef<"Investment", 'InvestmentStatus'>
    readonly createdAt: FieldRef<"Investment", 'DateTime'>
    readonly updatedAt: FieldRef<"Investment", 'DateTime'>
    readonly investorId: FieldRef<"Investment", 'String'>
    readonly pitchId: FieldRef<"Investment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Investment findUnique
   */
  export type InvestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findUniqueOrThrow
   */
  export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findFirst
   */
  export type InvestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findFirstOrThrow
   */
  export type InvestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findMany
   */
  export type InvestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment create
   */
  export type InvestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Investment.
     */
    data: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
  }

  /**
   * Investment createMany
   */
  export type InvestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
  }

  /**
   * Investment createManyAndReturn
   */
  export type InvestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment update
   */
  export type InvestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Investment.
     */
    data: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
    /**
     * Choose, which Investment to update.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment updateMany
   */
  export type InvestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
  }

  /**
   * Investment updateManyAndReturn
   */
  export type InvestmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment upsert
   */
  export type InvestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Investment to update in case it exists.
     */
    where: InvestmentWhereUniqueInput
    /**
     * In case the Investment found by the `where` argument doesn't exist, create a new Investment with this data.
     */
    create: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
    /**
     * In case the Investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
  }

  /**
   * Investment delete
   */
  export type InvestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter which Investment to delete.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment deleteMany
   */
  export type InvestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to delete.
     */
    limit?: number
  }

  /**
   * Investment without action
   */
  export type InvestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    content: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pitchId: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    content: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pitchId: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    content: number
    answer: number
    createdAt: number
    updatedAt: number
    pitchId: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    content?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    pitchId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    content?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    pitchId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    content?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    pitchId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    content: string
    answer: string | null
    createdAt: Date
    updatedAt: Date
    pitchId: string
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pitchId?: boolean
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pitchId?: boolean
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pitchId?: boolean
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    content?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pitchId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "answer" | "createdAt" | "updatedAt" | "pitchId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      pitch: Prisma.$PitchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      answer: string | null
      createdAt: Date
      updatedAt: Date
      pitchId: string
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pitch<T extends PitchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PitchDefaultArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly content: FieldRef<"Question", 'String'>
    readonly answer: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
    readonly pitchId: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    _all: number
  }


  export type BadgeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: string
    name: string
    description: string
    imageUrl: string
    _count: BadgeCountAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    users?: boolean | Badge$usersArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
  }

  export type BadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl", ExtArgs["result"]["badge"]>
  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Badge$usersArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      imageUrl: string
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Badges and returns the data saved in the database.
     * @param {BadgeCreateManyAndReturnArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges and returns the data updated in the database.
     * @param {BadgeUpdateManyAndReturnArgs} args - Arguments to update many Badges.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, BadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Badge$usersArgs<ExtArgs> = {}>(args?: Subset<T, Badge$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Badge model
   */
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'String'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly description: FieldRef<"Badge", 'String'>
    readonly imageUrl: FieldRef<"Badge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
  }

  /**
   * Badge createManyAndReturn
   */
  export type BadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge updateManyAndReturn
   */
  export type BadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to delete.
     */
    limit?: number
  }

  /**
   * Badge.users
   */
  export type Badge$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    kycStatus: 'kycStatus',
    kycDocuments: 'kycDocuments',
    badgeId: 'badgeId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PitchScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    videoUrl: 'videoUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorId: 'creatorId',
    aiScore: 'aiScore'
  };

  export type PitchScalarFieldEnum = (typeof PitchScalarFieldEnum)[keyof typeof PitchScalarFieldEnum]


  export const InvestmentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    investorId: 'investorId',
    pitchId: 'pitchId'
  };

  export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    content: 'content',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pitchId: 'pitchId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'KYCStatus'
   */
  export type EnumKYCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KYCStatus'>
    


  /**
   * Reference to a field of type 'PitchStatus'
   */
  export type EnumPitchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PitchStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'InvestmentStatus'
   */
  export type EnumInvestmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    kycStatus?: EnumKYCStatusFilter<"User"> | $Enums.KYCStatus
    kycDocuments?: StringFilter<"User"> | string
    badgeId?: StringNullableFilter<"User"> | string | null
    pitches?: PitchListRelationFilter
    investments?: InvestmentListRelationFilter
    badge?: XOR<BadgeNullableScalarRelationFilter, BadgeWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kycStatus?: SortOrder
    kycDocuments?: SortOrder
    badgeId?: SortOrderInput | SortOrder
    pitches?: PitchOrderByRelationAggregateInput
    investments?: InvestmentOrderByRelationAggregateInput
    badge?: BadgeOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    kycStatus?: EnumKYCStatusFilter<"User"> | $Enums.KYCStatus
    kycDocuments?: StringFilter<"User"> | string
    badgeId?: StringNullableFilter<"User"> | string | null
    pitches?: PitchListRelationFilter
    investments?: InvestmentListRelationFilter
    badge?: XOR<BadgeNullableScalarRelationFilter, BadgeWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kycStatus?: SortOrder
    kycDocuments?: SortOrder
    badgeId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    kycStatus?: EnumKYCStatusWithAggregatesFilter<"User"> | $Enums.KYCStatus
    kycDocuments?: StringWithAggregatesFilter<"User"> | string
    badgeId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PitchWhereInput = {
    AND?: PitchWhereInput | PitchWhereInput[]
    OR?: PitchWhereInput[]
    NOT?: PitchWhereInput | PitchWhereInput[]
    id?: StringFilter<"Pitch"> | string
    title?: StringFilter<"Pitch"> | string
    description?: StringFilter<"Pitch"> | string
    videoUrl?: StringFilter<"Pitch"> | string
    status?: EnumPitchStatusFilter<"Pitch"> | $Enums.PitchStatus
    createdAt?: DateTimeFilter<"Pitch"> | Date | string
    updatedAt?: DateTimeFilter<"Pitch"> | Date | string
    creatorId?: StringFilter<"Pitch"> | string
    aiScore?: FloatNullableFilter<"Pitch"> | number | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    investments?: InvestmentListRelationFilter
    questions?: QuestionListRelationFilter
  }

  export type PitchOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    aiScore?: SortOrderInput | SortOrder
    creator?: UserOrderByWithRelationInput
    investments?: InvestmentOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type PitchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PitchWhereInput | PitchWhereInput[]
    OR?: PitchWhereInput[]
    NOT?: PitchWhereInput | PitchWhereInput[]
    title?: StringFilter<"Pitch"> | string
    description?: StringFilter<"Pitch"> | string
    videoUrl?: StringFilter<"Pitch"> | string
    status?: EnumPitchStatusFilter<"Pitch"> | $Enums.PitchStatus
    createdAt?: DateTimeFilter<"Pitch"> | Date | string
    updatedAt?: DateTimeFilter<"Pitch"> | Date | string
    creatorId?: StringFilter<"Pitch"> | string
    aiScore?: FloatNullableFilter<"Pitch"> | number | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    investments?: InvestmentListRelationFilter
    questions?: QuestionListRelationFilter
  }, "id">

  export type PitchOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    aiScore?: SortOrderInput | SortOrder
    _count?: PitchCountOrderByAggregateInput
    _avg?: PitchAvgOrderByAggregateInput
    _max?: PitchMaxOrderByAggregateInput
    _min?: PitchMinOrderByAggregateInput
    _sum?: PitchSumOrderByAggregateInput
  }

  export type PitchScalarWhereWithAggregatesInput = {
    AND?: PitchScalarWhereWithAggregatesInput | PitchScalarWhereWithAggregatesInput[]
    OR?: PitchScalarWhereWithAggregatesInput[]
    NOT?: PitchScalarWhereWithAggregatesInput | PitchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pitch"> | string
    title?: StringWithAggregatesFilter<"Pitch"> | string
    description?: StringWithAggregatesFilter<"Pitch"> | string
    videoUrl?: StringWithAggregatesFilter<"Pitch"> | string
    status?: EnumPitchStatusWithAggregatesFilter<"Pitch"> | $Enums.PitchStatus
    createdAt?: DateTimeWithAggregatesFilter<"Pitch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pitch"> | Date | string
    creatorId?: StringWithAggregatesFilter<"Pitch"> | string
    aiScore?: FloatNullableWithAggregatesFilter<"Pitch"> | number | null
  }

  export type InvestmentWhereInput = {
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    id?: StringFilter<"Investment"> | string
    amount?: FloatFilter<"Investment"> | number
    status?: EnumInvestmentStatusFilter<"Investment"> | $Enums.InvestmentStatus
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
    investorId?: StringFilter<"Investment"> | string
    pitchId?: StringFilter<"Investment"> | string
    investor?: XOR<UserScalarRelationFilter, UserWhereInput>
    pitch?: XOR<PitchScalarRelationFilter, PitchWhereInput>
  }

  export type InvestmentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    investorId?: SortOrder
    pitchId?: SortOrder
    investor?: UserOrderByWithRelationInput
    pitch?: PitchOrderByWithRelationInput
  }

  export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    amount?: FloatFilter<"Investment"> | number
    status?: EnumInvestmentStatusFilter<"Investment"> | $Enums.InvestmentStatus
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
    investorId?: StringFilter<"Investment"> | string
    pitchId?: StringFilter<"Investment"> | string
    investor?: XOR<UserScalarRelationFilter, UserWhereInput>
    pitch?: XOR<PitchScalarRelationFilter, PitchWhereInput>
  }, "id">

  export type InvestmentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    investorId?: SortOrder
    pitchId?: SortOrder
    _count?: InvestmentCountOrderByAggregateInput
    _avg?: InvestmentAvgOrderByAggregateInput
    _max?: InvestmentMaxOrderByAggregateInput
    _min?: InvestmentMinOrderByAggregateInput
    _sum?: InvestmentSumOrderByAggregateInput
  }

  export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    OR?: InvestmentScalarWhereWithAggregatesInput[]
    NOT?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment"> | string
    amount?: FloatWithAggregatesFilter<"Investment"> | number
    status?: EnumInvestmentStatusWithAggregatesFilter<"Investment"> | $Enums.InvestmentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    investorId?: StringWithAggregatesFilter<"Investment"> | string
    pitchId?: StringWithAggregatesFilter<"Investment"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    answer?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    pitchId?: StringFilter<"Question"> | string
    pitch?: XOR<PitchScalarRelationFilter, PitchWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    answer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pitchId?: SortOrder
    pitch?: PitchOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    content?: StringFilter<"Question"> | string
    answer?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    pitchId?: StringFilter<"Question"> | string
    pitch?: XOR<PitchScalarRelationFilter, PitchWhereInput>
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    answer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pitchId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    content?: StringWithAggregatesFilter<"Question"> | string
    answer?: StringNullableWithAggregatesFilter<"Question"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    pitchId?: StringWithAggregatesFilter<"Question"> | string
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: StringFilter<"Badge"> | string
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    imageUrl?: StringFilter<"Badge"> | string
    users?: UserListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    imageUrl?: StringFilter<"Badge"> | string
    users?: UserListRelationFilter
  }, "id">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Badge"> | string
    name?: StringWithAggregatesFilter<"Badge"> | string
    description?: StringWithAggregatesFilter<"Badge"> | string
    imageUrl?: StringWithAggregatesFilter<"Badge"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KYCStatus
    kycDocuments: string
    pitches?: PitchCreateNestedManyWithoutCreatorInput
    investments?: InvestmentCreateNestedManyWithoutInvestorInput
    badge?: BadgeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KYCStatus
    kycDocuments: string
    badgeId?: string | null
    pitches?: PitchUncheckedCreateNestedManyWithoutCreatorInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    kycDocuments?: StringFieldUpdateOperationsInput | string
    pitches?: PitchUpdateManyWithoutCreatorNestedInput
    investments?: InvestmentUpdateManyWithoutInvestorNestedInput
    badge?: BadgeUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    kycDocuments?: StringFieldUpdateOperationsInput | string
    badgeId?: NullableStringFieldUpdateOperationsInput | string | null
    pitches?: PitchUncheckedUpdateManyWithoutCreatorNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KYCStatus
    kycDocuments: string
    badgeId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    kycDocuments?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    kycDocuments?: StringFieldUpdateOperationsInput | string
    badgeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PitchCreateInput = {
    id?: string
    title: string
    description: string
    videoUrl: string
    status?: $Enums.PitchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aiScore?: number | null
    creator: UserCreateNestedOneWithoutPitchesInput
    investments?: InvestmentCreateNestedManyWithoutPitchInput
    questions?: QuestionCreateNestedManyWithoutPitchInput
  }

  export type PitchUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    videoUrl: string
    status?: $Enums.PitchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    aiScore?: number | null
    investments?: InvestmentUncheckedCreateNestedManyWithoutPitchInput
    questions?: QuestionUncheckedCreateNestedManyWithoutPitchInput
  }

  export type PitchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPitchStatusFieldUpdateOperationsInput | $Enums.PitchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    creator?: UserUpdateOneRequiredWithoutPitchesNestedInput
    investments?: InvestmentUpdateManyWithoutPitchNestedInput
    questions?: QuestionUpdateManyWithoutPitchNestedInput
  }

  export type PitchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPitchStatusFieldUpdateOperationsInput | $Enums.PitchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    investments?: InvestmentUncheckedUpdateManyWithoutPitchNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutPitchNestedInput
  }

  export type PitchCreateManyInput = {
    id?: string
    title: string
    description: string
    videoUrl: string
    status?: $Enums.PitchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    aiScore?: number | null
  }

  export type PitchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPitchStatusFieldUpdateOperationsInput | $Enums.PitchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PitchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPitchStatusFieldUpdateOperationsInput | $Enums.PitchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type InvestmentCreateInput = {
    id?: string
    amount: number
    status?: $Enums.InvestmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investor: UserCreateNestedOneWithoutInvestmentsInput
    pitch: PitchCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateInput = {
    id?: string
    amount: number
    status?: $Enums.InvestmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investorId: string
    pitchId: string
  }

  export type InvestmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investor?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
    pitch?: PitchUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investorId?: StringFieldUpdateOperationsInput | string
    pitchId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentCreateManyInput = {
    id?: string
    amount: number
    status?: $Enums.InvestmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investorId: string
    pitchId: string
  }

  export type InvestmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investorId?: StringFieldUpdateOperationsInput | string
    pitchId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    content: string
    answer?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pitch: PitchCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    content: string
    answer?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pitchId: string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitch?: PitchUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitchId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    content: string
    answer?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pitchId: string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitchId?: StringFieldUpdateOperationsInput | string
  }

  export type BadgeCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    users?: UserCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    users?: UserUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeCreateManyInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
  }

  export type BadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumKYCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCStatus | EnumKYCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCStatus[]
    notIn?: $Enums.KYCStatus[]
    not?: NestedEnumKYCStatusFilter<$PrismaModel> | $Enums.KYCStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PitchListRelationFilter = {
    every?: PitchWhereInput
    some?: PitchWhereInput
    none?: PitchWhereInput
  }

  export type InvestmentListRelationFilter = {
    every?: InvestmentWhereInput
    some?: InvestmentWhereInput
    none?: InvestmentWhereInput
  }

  export type BadgeNullableScalarRelationFilter = {
    is?: BadgeWhereInput | null
    isNot?: BadgeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PitchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kycStatus?: SortOrder
    kycDocuments?: SortOrder
    badgeId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kycStatus?: SortOrder
    kycDocuments?: SortOrder
    badgeId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kycStatus?: SortOrder
    kycDocuments?: SortOrder
    badgeId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumKYCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCStatus | EnumKYCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCStatus[]
    notIn?: $Enums.KYCStatus[]
    not?: NestedEnumKYCStatusWithAggregatesFilter<$PrismaModel> | $Enums.KYCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKYCStatusFilter<$PrismaModel>
    _max?: NestedEnumKYCStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPitchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PitchStatus | EnumPitchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PitchStatus[]
    notIn?: $Enums.PitchStatus[]
    not?: NestedEnumPitchStatusFilter<$PrismaModel> | $Enums.PitchStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PitchCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    aiScore?: SortOrder
  }

  export type PitchAvgOrderByAggregateInput = {
    aiScore?: SortOrder
  }

  export type PitchMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    aiScore?: SortOrder
  }

  export type PitchMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    aiScore?: SortOrder
  }

  export type PitchSumOrderByAggregateInput = {
    aiScore?: SortOrder
  }

  export type EnumPitchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PitchStatus | EnumPitchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PitchStatus[]
    notIn?: $Enums.PitchStatus[]
    not?: NestedEnumPitchStatusWithAggregatesFilter<$PrismaModel> | $Enums.PitchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPitchStatusFilter<$PrismaModel>
    _max?: NestedEnumPitchStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumInvestmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[]
    notIn?: $Enums.InvestmentStatus[]
    not?: NestedEnumInvestmentStatusFilter<$PrismaModel> | $Enums.InvestmentStatus
  }

  export type PitchScalarRelationFilter = {
    is?: PitchWhereInput
    isNot?: PitchWhereInput
  }

  export type InvestmentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    investorId?: SortOrder
    pitchId?: SortOrder
  }

  export type InvestmentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    investorId?: SortOrder
    pitchId?: SortOrder
  }

  export type InvestmentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    investorId?: SortOrder
    pitchId?: SortOrder
  }

  export type InvestmentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumInvestmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[]
    notIn?: $Enums.InvestmentStatus[]
    not?: NestedEnumInvestmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentStatusFilter<$PrismaModel>
    _max?: NestedEnumInvestmentStatusFilter<$PrismaModel>
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pitchId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pitchId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pitchId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type PitchCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PitchCreateWithoutCreatorInput, PitchUncheckedCreateWithoutCreatorInput> | PitchCreateWithoutCreatorInput[] | PitchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutCreatorInput | PitchCreateOrConnectWithoutCreatorInput[]
    createMany?: PitchCreateManyCreatorInputEnvelope
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
  }

  export type InvestmentCreateNestedManyWithoutInvestorInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type BadgeCreateNestedOneWithoutUsersInput = {
    create?: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUsersInput
    connect?: BadgeWhereUniqueInput
  }

  export type PitchUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PitchCreateWithoutCreatorInput, PitchUncheckedCreateWithoutCreatorInput> | PitchCreateWithoutCreatorInput[] | PitchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutCreatorInput | PitchCreateOrConnectWithoutCreatorInput[]
    createMany?: PitchCreateManyCreatorInputEnvelope
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumKYCStatusFieldUpdateOperationsInput = {
    set?: $Enums.KYCStatus
  }

  export type PitchUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PitchCreateWithoutCreatorInput, PitchUncheckedCreateWithoutCreatorInput> | PitchCreateWithoutCreatorInput[] | PitchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutCreatorInput | PitchCreateOrConnectWithoutCreatorInput[]
    upsert?: PitchUpsertWithWhereUniqueWithoutCreatorInput | PitchUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PitchCreateManyCreatorInputEnvelope
    set?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    disconnect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    delete?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    update?: PitchUpdateWithWhereUniqueWithoutCreatorInput | PitchUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PitchUpdateManyWithWhereWithoutCreatorInput | PitchUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PitchScalarWhereInput | PitchScalarWhereInput[]
  }

  export type InvestmentUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInvestorInput | InvestmentUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInvestorInput | InvestmentUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInvestorInput | InvestmentUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type BadgeUpdateOneWithoutUsersNestedInput = {
    create?: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUsersInput
    upsert?: BadgeUpsertWithoutUsersInput
    disconnect?: BadgeWhereInput | boolean
    delete?: BadgeWhereInput | boolean
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutUsersInput, BadgeUpdateWithoutUsersInput>, BadgeUncheckedUpdateWithoutUsersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PitchUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PitchCreateWithoutCreatorInput, PitchUncheckedCreateWithoutCreatorInput> | PitchCreateWithoutCreatorInput[] | PitchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutCreatorInput | PitchCreateOrConnectWithoutCreatorInput[]
    upsert?: PitchUpsertWithWhereUniqueWithoutCreatorInput | PitchUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PitchCreateManyCreatorInputEnvelope
    set?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    disconnect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    delete?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    update?: PitchUpdateWithWhereUniqueWithoutCreatorInput | PitchUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PitchUpdateManyWithWhereWithoutCreatorInput | PitchUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PitchScalarWhereInput | PitchScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInvestorInput | InvestmentUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInvestorInput | InvestmentUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInvestorInput | InvestmentUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPitchesInput = {
    create?: XOR<UserCreateWithoutPitchesInput, UserUncheckedCreateWithoutPitchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPitchesInput
    connect?: UserWhereUniqueInput
  }

  export type InvestmentCreateNestedManyWithoutPitchInput = {
    create?: XOR<InvestmentCreateWithoutPitchInput, InvestmentUncheckedCreateWithoutPitchInput> | InvestmentCreateWithoutPitchInput[] | InvestmentUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutPitchInput | InvestmentCreateOrConnectWithoutPitchInput[]
    createMany?: InvestmentCreateManyPitchInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutPitchInput = {
    create?: XOR<QuestionCreateWithoutPitchInput, QuestionUncheckedCreateWithoutPitchInput> | QuestionCreateWithoutPitchInput[] | QuestionUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutPitchInput | QuestionCreateOrConnectWithoutPitchInput[]
    createMany?: QuestionCreateManyPitchInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutPitchInput = {
    create?: XOR<InvestmentCreateWithoutPitchInput, InvestmentUncheckedCreateWithoutPitchInput> | InvestmentCreateWithoutPitchInput[] | InvestmentUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutPitchInput | InvestmentCreateOrConnectWithoutPitchInput[]
    createMany?: InvestmentCreateManyPitchInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutPitchInput = {
    create?: XOR<QuestionCreateWithoutPitchInput, QuestionUncheckedCreateWithoutPitchInput> | QuestionCreateWithoutPitchInput[] | QuestionUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutPitchInput | QuestionCreateOrConnectWithoutPitchInput[]
    createMany?: QuestionCreateManyPitchInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type EnumPitchStatusFieldUpdateOperationsInput = {
    set?: $Enums.PitchStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPitchesNestedInput = {
    create?: XOR<UserCreateWithoutPitchesInput, UserUncheckedCreateWithoutPitchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPitchesInput
    upsert?: UserUpsertWithoutPitchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPitchesInput, UserUpdateWithoutPitchesInput>, UserUncheckedUpdateWithoutPitchesInput>
  }

  export type InvestmentUpdateManyWithoutPitchNestedInput = {
    create?: XOR<InvestmentCreateWithoutPitchInput, InvestmentUncheckedCreateWithoutPitchInput> | InvestmentCreateWithoutPitchInput[] | InvestmentUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutPitchInput | InvestmentCreateOrConnectWithoutPitchInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutPitchInput | InvestmentUpsertWithWhereUniqueWithoutPitchInput[]
    createMany?: InvestmentCreateManyPitchInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutPitchInput | InvestmentUpdateWithWhereUniqueWithoutPitchInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutPitchInput | InvestmentUpdateManyWithWhereWithoutPitchInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutPitchNestedInput = {
    create?: XOR<QuestionCreateWithoutPitchInput, QuestionUncheckedCreateWithoutPitchInput> | QuestionCreateWithoutPitchInput[] | QuestionUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutPitchInput | QuestionCreateOrConnectWithoutPitchInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutPitchInput | QuestionUpsertWithWhereUniqueWithoutPitchInput[]
    createMany?: QuestionCreateManyPitchInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutPitchInput | QuestionUpdateWithWhereUniqueWithoutPitchInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutPitchInput | QuestionUpdateManyWithWhereWithoutPitchInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutPitchNestedInput = {
    create?: XOR<InvestmentCreateWithoutPitchInput, InvestmentUncheckedCreateWithoutPitchInput> | InvestmentCreateWithoutPitchInput[] | InvestmentUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutPitchInput | InvestmentCreateOrConnectWithoutPitchInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutPitchInput | InvestmentUpsertWithWhereUniqueWithoutPitchInput[]
    createMany?: InvestmentCreateManyPitchInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutPitchInput | InvestmentUpdateWithWhereUniqueWithoutPitchInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutPitchInput | InvestmentUpdateManyWithWhereWithoutPitchInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutPitchNestedInput = {
    create?: XOR<QuestionCreateWithoutPitchInput, QuestionUncheckedCreateWithoutPitchInput> | QuestionCreateWithoutPitchInput[] | QuestionUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutPitchInput | QuestionCreateOrConnectWithoutPitchInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutPitchInput | QuestionUpsertWithWhereUniqueWithoutPitchInput[]
    createMany?: QuestionCreateManyPitchInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutPitchInput | QuestionUpdateWithWhereUniqueWithoutPitchInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutPitchInput | QuestionUpdateManyWithWhereWithoutPitchInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
  }

  export type PitchCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<PitchCreateWithoutInvestmentsInput, PitchUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: PitchCreateOrConnectWithoutInvestmentsInput
    connect?: PitchWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumInvestmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvestmentStatus
  }

  export type UserUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    upsert?: UserUpsertWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvestmentsInput, UserUpdateWithoutInvestmentsInput>, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type PitchUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<PitchCreateWithoutInvestmentsInput, PitchUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: PitchCreateOrConnectWithoutInvestmentsInput
    upsert?: PitchUpsertWithoutInvestmentsInput
    connect?: PitchWhereUniqueInput
    update?: XOR<XOR<PitchUpdateToOneWithWhereWithoutInvestmentsInput, PitchUpdateWithoutInvestmentsInput>, PitchUncheckedUpdateWithoutInvestmentsInput>
  }

  export type PitchCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<PitchCreateWithoutQuestionsInput, PitchUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: PitchCreateOrConnectWithoutQuestionsInput
    connect?: PitchWhereUniqueInput
  }

  export type PitchUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<PitchCreateWithoutQuestionsInput, PitchUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: PitchCreateOrConnectWithoutQuestionsInput
    upsert?: PitchUpsertWithoutQuestionsInput
    connect?: PitchWhereUniqueInput
    update?: XOR<XOR<PitchUpdateToOneWithWhereWithoutQuestionsInput, PitchUpdateWithoutQuestionsInput>, PitchUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput> | UserCreateWithoutBadgeInput[] | UserUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBadgeInput | UserCreateOrConnectWithoutBadgeInput[]
    createMany?: UserCreateManyBadgeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput> | UserCreateWithoutBadgeInput[] | UserUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBadgeInput | UserCreateOrConnectWithoutBadgeInput[]
    createMany?: UserCreateManyBadgeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput> | UserCreateWithoutBadgeInput[] | UserUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBadgeInput | UserCreateOrConnectWithoutBadgeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBadgeInput | UserUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserCreateManyBadgeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBadgeInput | UserUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBadgeInput | UserUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput> | UserCreateWithoutBadgeInput[] | UserUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBadgeInput | UserCreateOrConnectWithoutBadgeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBadgeInput | UserUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserCreateManyBadgeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBadgeInput | UserUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBadgeInput | UserUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumKYCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCStatus | EnumKYCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCStatus[]
    notIn?: $Enums.KYCStatus[]
    not?: NestedEnumKYCStatusFilter<$PrismaModel> | $Enums.KYCStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumKYCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCStatus | EnumKYCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCStatus[]
    notIn?: $Enums.KYCStatus[]
    not?: NestedEnumKYCStatusWithAggregatesFilter<$PrismaModel> | $Enums.KYCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKYCStatusFilter<$PrismaModel>
    _max?: NestedEnumKYCStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPitchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PitchStatus | EnumPitchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PitchStatus[]
    notIn?: $Enums.PitchStatus[]
    not?: NestedEnumPitchStatusFilter<$PrismaModel> | $Enums.PitchStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPitchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PitchStatus | EnumPitchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PitchStatus[]
    notIn?: $Enums.PitchStatus[]
    not?: NestedEnumPitchStatusWithAggregatesFilter<$PrismaModel> | $Enums.PitchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPitchStatusFilter<$PrismaModel>
    _max?: NestedEnumPitchStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumInvestmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[]
    notIn?: $Enums.InvestmentStatus[]
    not?: NestedEnumInvestmentStatusFilter<$PrismaModel> | $Enums.InvestmentStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumInvestmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[]
    notIn?: $Enums.InvestmentStatus[]
    not?: NestedEnumInvestmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentStatusFilter<$PrismaModel>
    _max?: NestedEnumInvestmentStatusFilter<$PrismaModel>
  }

  export type PitchCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    videoUrl: string
    status?: $Enums.PitchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aiScore?: number | null
    investments?: InvestmentCreateNestedManyWithoutPitchInput
    questions?: QuestionCreateNestedManyWithoutPitchInput
  }

  export type PitchUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    videoUrl: string
    status?: $Enums.PitchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aiScore?: number | null
    investments?: InvestmentUncheckedCreateNestedManyWithoutPitchInput
    questions?: QuestionUncheckedCreateNestedManyWithoutPitchInput
  }

  export type PitchCreateOrConnectWithoutCreatorInput = {
    where: PitchWhereUniqueInput
    create: XOR<PitchCreateWithoutCreatorInput, PitchUncheckedCreateWithoutCreatorInput>
  }

  export type PitchCreateManyCreatorInputEnvelope = {
    data: PitchCreateManyCreatorInput | PitchCreateManyCreatorInput[]
  }

  export type InvestmentCreateWithoutInvestorInput = {
    id?: string
    amount: number
    status?: $Enums.InvestmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    pitch: PitchCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateWithoutInvestorInput = {
    id?: string
    amount: number
    status?: $Enums.InvestmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    pitchId: string
  }

  export type InvestmentCreateOrConnectWithoutInvestorInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput>
  }

  export type InvestmentCreateManyInvestorInputEnvelope = {
    data: InvestmentCreateManyInvestorInput | InvestmentCreateManyInvestorInput[]
  }

  export type BadgeCreateWithoutUsersInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
  }

  export type BadgeUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
  }

  export type BadgeCreateOrConnectWithoutUsersInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
  }

  export type PitchUpsertWithWhereUniqueWithoutCreatorInput = {
    where: PitchWhereUniqueInput
    update: XOR<PitchUpdateWithoutCreatorInput, PitchUncheckedUpdateWithoutCreatorInput>
    create: XOR<PitchCreateWithoutCreatorInput, PitchUncheckedCreateWithoutCreatorInput>
  }

  export type PitchUpdateWithWhereUniqueWithoutCreatorInput = {
    where: PitchWhereUniqueInput
    data: XOR<PitchUpdateWithoutCreatorInput, PitchUncheckedUpdateWithoutCreatorInput>
  }

  export type PitchUpdateManyWithWhereWithoutCreatorInput = {
    where: PitchScalarWhereInput
    data: XOR<PitchUpdateManyMutationInput, PitchUncheckedUpdateManyWithoutCreatorInput>
  }

  export type PitchScalarWhereInput = {
    AND?: PitchScalarWhereInput | PitchScalarWhereInput[]
    OR?: PitchScalarWhereInput[]
    NOT?: PitchScalarWhereInput | PitchScalarWhereInput[]
    id?: StringFilter<"Pitch"> | string
    title?: StringFilter<"Pitch"> | string
    description?: StringFilter<"Pitch"> | string
    videoUrl?: StringFilter<"Pitch"> | string
    status?: EnumPitchStatusFilter<"Pitch"> | $Enums.PitchStatus
    createdAt?: DateTimeFilter<"Pitch"> | Date | string
    updatedAt?: DateTimeFilter<"Pitch"> | Date | string
    creatorId?: StringFilter<"Pitch"> | string
    aiScore?: FloatNullableFilter<"Pitch"> | number | null
  }

  export type InvestmentUpsertWithWhereUniqueWithoutInvestorInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutInvestorInput, InvestmentUncheckedUpdateWithoutInvestorInput>
    create: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutInvestorInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutInvestorInput, InvestmentUncheckedUpdateWithoutInvestorInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutInvestorInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutInvestorInput>
  }

  export type InvestmentScalarWhereInput = {
    AND?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    OR?: InvestmentScalarWhereInput[]
    NOT?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    id?: StringFilter<"Investment"> | string
    amount?: FloatFilter<"Investment"> | number
    status?: EnumInvestmentStatusFilter<"Investment"> | $Enums.InvestmentStatus
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
    investorId?: StringFilter<"Investment"> | string
    pitchId?: StringFilter<"Investment"> | string
  }

  export type BadgeUpsertWithoutUsersInput = {
    update: XOR<BadgeUpdateWithoutUsersInput, BadgeUncheckedUpdateWithoutUsersInput>
    create: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutUsersInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutUsersInput, BadgeUncheckedUpdateWithoutUsersInput>
  }

  export type BadgeUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type BadgeUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutPitchesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KYCStatus
    kycDocuments: string
    investments?: InvestmentCreateNestedManyWithoutInvestorInput
    badge?: BadgeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPitchesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KYCStatus
    kycDocuments: string
    badgeId?: string | null
    investments?: InvestmentUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type UserCreateOrConnectWithoutPitchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPitchesInput, UserUncheckedCreateWithoutPitchesInput>
  }

  export type InvestmentCreateWithoutPitchInput = {
    id?: string
    amount: number
    status?: $Enums.InvestmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investor: UserCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateWithoutPitchInput = {
    id?: string
    amount: number
    status?: $Enums.InvestmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investorId: string
  }

  export type InvestmentCreateOrConnectWithoutPitchInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutPitchInput, InvestmentUncheckedCreateWithoutPitchInput>
  }

  export type InvestmentCreateManyPitchInputEnvelope = {
    data: InvestmentCreateManyPitchInput | InvestmentCreateManyPitchInput[]
  }

  export type QuestionCreateWithoutPitchInput = {
    id?: string
    content: string
    answer?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutPitchInput = {
    id?: string
    content: string
    answer?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutPitchInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutPitchInput, QuestionUncheckedCreateWithoutPitchInput>
  }

  export type QuestionCreateManyPitchInputEnvelope = {
    data: QuestionCreateManyPitchInput | QuestionCreateManyPitchInput[]
  }

  export type UserUpsertWithoutPitchesInput = {
    update: XOR<UserUpdateWithoutPitchesInput, UserUncheckedUpdateWithoutPitchesInput>
    create: XOR<UserCreateWithoutPitchesInput, UserUncheckedCreateWithoutPitchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPitchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPitchesInput, UserUncheckedUpdateWithoutPitchesInput>
  }

  export type UserUpdateWithoutPitchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    kycDocuments?: StringFieldUpdateOperationsInput | string
    investments?: InvestmentUpdateManyWithoutInvestorNestedInput
    badge?: BadgeUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPitchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    kycDocuments?: StringFieldUpdateOperationsInput | string
    badgeId?: NullableStringFieldUpdateOperationsInput | string | null
    investments?: InvestmentUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type InvestmentUpsertWithWhereUniqueWithoutPitchInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutPitchInput, InvestmentUncheckedUpdateWithoutPitchInput>
    create: XOR<InvestmentCreateWithoutPitchInput, InvestmentUncheckedCreateWithoutPitchInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutPitchInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutPitchInput, InvestmentUncheckedUpdateWithoutPitchInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutPitchInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutPitchInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutPitchInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutPitchInput, QuestionUncheckedUpdateWithoutPitchInput>
    create: XOR<QuestionCreateWithoutPitchInput, QuestionUncheckedCreateWithoutPitchInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutPitchInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutPitchInput, QuestionUncheckedUpdateWithoutPitchInput>
  }

  export type QuestionUpdateManyWithWhereWithoutPitchInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutPitchInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    answer?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    pitchId?: StringFilter<"Question"> | string
  }

  export type UserCreateWithoutInvestmentsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KYCStatus
    kycDocuments: string
    pitches?: PitchCreateNestedManyWithoutCreatorInput
    badge?: BadgeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KYCStatus
    kycDocuments: string
    badgeId?: string | null
    pitches?: PitchUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutInvestmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
  }

  export type PitchCreateWithoutInvestmentsInput = {
    id?: string
    title: string
    description: string
    videoUrl: string
    status?: $Enums.PitchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aiScore?: number | null
    creator: UserCreateNestedOneWithoutPitchesInput
    questions?: QuestionCreateNestedManyWithoutPitchInput
  }

  export type PitchUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    title: string
    description: string
    videoUrl: string
    status?: $Enums.PitchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    aiScore?: number | null
    questions?: QuestionUncheckedCreateNestedManyWithoutPitchInput
  }

  export type PitchCreateOrConnectWithoutInvestmentsInput = {
    where: PitchWhereUniqueInput
    create: XOR<PitchCreateWithoutInvestmentsInput, PitchUncheckedCreateWithoutInvestmentsInput>
  }

  export type UserUpsertWithoutInvestmentsInput = {
    update: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type UserUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    kycDocuments?: StringFieldUpdateOperationsInput | string
    pitches?: PitchUpdateManyWithoutCreatorNestedInput
    badge?: BadgeUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    kycDocuments?: StringFieldUpdateOperationsInput | string
    badgeId?: NullableStringFieldUpdateOperationsInput | string | null
    pitches?: PitchUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type PitchUpsertWithoutInvestmentsInput = {
    update: XOR<PitchUpdateWithoutInvestmentsInput, PitchUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<PitchCreateWithoutInvestmentsInput, PitchUncheckedCreateWithoutInvestmentsInput>
    where?: PitchWhereInput
  }

  export type PitchUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: PitchWhereInput
    data: XOR<PitchUpdateWithoutInvestmentsInput, PitchUncheckedUpdateWithoutInvestmentsInput>
  }

  export type PitchUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPitchStatusFieldUpdateOperationsInput | $Enums.PitchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    creator?: UserUpdateOneRequiredWithoutPitchesNestedInput
    questions?: QuestionUpdateManyWithoutPitchNestedInput
  }

  export type PitchUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPitchStatusFieldUpdateOperationsInput | $Enums.PitchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    questions?: QuestionUncheckedUpdateManyWithoutPitchNestedInput
  }

  export type PitchCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description: string
    videoUrl: string
    status?: $Enums.PitchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aiScore?: number | null
    creator: UserCreateNestedOneWithoutPitchesInput
    investments?: InvestmentCreateNestedManyWithoutPitchInput
  }

  export type PitchUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description: string
    videoUrl: string
    status?: $Enums.PitchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    aiScore?: number | null
    investments?: InvestmentUncheckedCreateNestedManyWithoutPitchInput
  }

  export type PitchCreateOrConnectWithoutQuestionsInput = {
    where: PitchWhereUniqueInput
    create: XOR<PitchCreateWithoutQuestionsInput, PitchUncheckedCreateWithoutQuestionsInput>
  }

  export type PitchUpsertWithoutQuestionsInput = {
    update: XOR<PitchUpdateWithoutQuestionsInput, PitchUncheckedUpdateWithoutQuestionsInput>
    create: XOR<PitchCreateWithoutQuestionsInput, PitchUncheckedCreateWithoutQuestionsInput>
    where?: PitchWhereInput
  }

  export type PitchUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: PitchWhereInput
    data: XOR<PitchUpdateWithoutQuestionsInput, PitchUncheckedUpdateWithoutQuestionsInput>
  }

  export type PitchUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPitchStatusFieldUpdateOperationsInput | $Enums.PitchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    creator?: UserUpdateOneRequiredWithoutPitchesNestedInput
    investments?: InvestmentUpdateManyWithoutPitchNestedInput
  }

  export type PitchUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPitchStatusFieldUpdateOperationsInput | $Enums.PitchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    investments?: InvestmentUncheckedUpdateManyWithoutPitchNestedInput
  }

  export type UserCreateWithoutBadgeInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KYCStatus
    kycDocuments: string
    pitches?: PitchCreateNestedManyWithoutCreatorInput
    investments?: InvestmentCreateNestedManyWithoutInvestorInput
  }

  export type UserUncheckedCreateWithoutBadgeInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KYCStatus
    kycDocuments: string
    pitches?: PitchUncheckedCreateNestedManyWithoutCreatorInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type UserCreateOrConnectWithoutBadgeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput>
  }

  export type UserCreateManyBadgeInputEnvelope = {
    data: UserCreateManyBadgeInput | UserCreateManyBadgeInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBadgeInput, UserUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserCreateWithoutBadgeInput, UserUncheckedCreateWithoutBadgeInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBadgeInput, UserUncheckedUpdateWithoutBadgeInput>
  }

  export type UserUpdateManyWithWhereWithoutBadgeInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBadgeInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    kycStatus?: EnumKYCStatusFilter<"User"> | $Enums.KYCStatus
    kycDocuments?: StringFilter<"User"> | string
    badgeId?: StringNullableFilter<"User"> | string | null
  }

  export type PitchCreateManyCreatorInput = {
    id?: string
    title: string
    description: string
    videoUrl: string
    status?: $Enums.PitchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aiScore?: number | null
  }

  export type InvestmentCreateManyInvestorInput = {
    id?: string
    amount: number
    status?: $Enums.InvestmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    pitchId: string
  }

  export type PitchUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPitchStatusFieldUpdateOperationsInput | $Enums.PitchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    investments?: InvestmentUpdateManyWithoutPitchNestedInput
    questions?: QuestionUpdateManyWithoutPitchNestedInput
  }

  export type PitchUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPitchStatusFieldUpdateOperationsInput | $Enums.PitchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
    investments?: InvestmentUncheckedUpdateManyWithoutPitchNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutPitchNestedInput
  }

  export type PitchUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPitchStatusFieldUpdateOperationsInput | $Enums.PitchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type InvestmentUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitch?: PitchUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitchId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentUncheckedUpdateManyWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitchId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentCreateManyPitchInput = {
    id?: string
    amount: number
    status?: $Enums.InvestmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investorId: string
  }

  export type QuestionCreateManyPitchInput = {
    id?: string
    content: string
    answer?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUpdateWithoutPitchInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investor?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutPitchInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investorId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentUncheckedUpdateManyWithoutPitchInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investorId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpdateWithoutPitchInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutPitchInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutPitchInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyBadgeInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    kycStatus?: $Enums.KYCStatus
    kycDocuments: string
  }

  export type UserUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    kycDocuments?: StringFieldUpdateOperationsInput | string
    pitches?: PitchUpdateManyWithoutCreatorNestedInput
    investments?: InvestmentUpdateManyWithoutInvestorNestedInput
  }

  export type UserUncheckedUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    kycDocuments?: StringFieldUpdateOperationsInput | string
    pitches?: PitchUncheckedUpdateManyWithoutCreatorNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kycStatus?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    kycDocuments?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}