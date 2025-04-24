
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
 * Model Plato
 * 
 */
export type Plato = $Result.DefaultSelection<Prisma.$PlatoPayload>
/**
 * Model ExtraPlato
 * 
 */
export type ExtraPlato = $Result.DefaultSelection<Prisma.$ExtraPlatoPayload>
/**
 * Model Extra
 * 
 */
export type Extra = $Result.DefaultSelection<Prisma.$ExtraPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Platoes
 * const platoes = await prisma.plato.findMany()
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
   * // Fetch zero or more Platoes
   * const platoes = await prisma.plato.findMany()
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
   * `prisma.plato`: Exposes CRUD operations for the **Plato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platoes
    * const platoes = await prisma.plato.findMany()
    * ```
    */
  get plato(): Prisma.PlatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.extraPlato`: Exposes CRUD operations for the **ExtraPlato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExtraPlatoes
    * const extraPlatoes = await prisma.extraPlato.findMany()
    * ```
    */
  get extraPlato(): Prisma.ExtraPlatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.extra`: Exposes CRUD operations for the **Extra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Extras
    * const extras = await prisma.extra.findMany()
    * ```
    */
  get extra(): Prisma.ExtraDelegate<ExtArgs, ClientOptions>;
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
    Plato: 'Plato',
    ExtraPlato: 'ExtraPlato',
    Extra: 'Extra'
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
      modelProps: "plato" | "extraPlato" | "extra"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Plato: {
        payload: Prisma.$PlatoPayload<ExtArgs>
        fields: Prisma.PlatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          findFirst: {
            args: Prisma.PlatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          findMany: {
            args: Prisma.PlatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>[]
          }
          create: {
            args: Prisma.PlatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          createMany: {
            args: Prisma.PlatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          update: {
            args: Prisma.PlatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          deleteMany: {
            args: Prisma.PlatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          aggregate: {
            args: Prisma.PlatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlato>
          }
          groupBy: {
            args: Prisma.PlatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatoCountArgs<ExtArgs>
            result: $Utils.Optional<PlatoCountAggregateOutputType> | number
          }
        }
      }
      ExtraPlato: {
        payload: Prisma.$ExtraPlatoPayload<ExtArgs>
        fields: Prisma.ExtraPlatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExtraPlatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPlatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExtraPlatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPlatoPayload>
          }
          findFirst: {
            args: Prisma.ExtraPlatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPlatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExtraPlatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPlatoPayload>
          }
          findMany: {
            args: Prisma.ExtraPlatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPlatoPayload>[]
          }
          create: {
            args: Prisma.ExtraPlatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPlatoPayload>
          }
          createMany: {
            args: Prisma.ExtraPlatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExtraPlatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPlatoPayload>
          }
          update: {
            args: Prisma.ExtraPlatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPlatoPayload>
          }
          deleteMany: {
            args: Prisma.ExtraPlatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExtraPlatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExtraPlatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPlatoPayload>
          }
          aggregate: {
            args: Prisma.ExtraPlatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExtraPlato>
          }
          groupBy: {
            args: Prisma.ExtraPlatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExtraPlatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExtraPlatoCountArgs<ExtArgs>
            result: $Utils.Optional<ExtraPlatoCountAggregateOutputType> | number
          }
        }
      }
      Extra: {
        payload: Prisma.$ExtraPayload<ExtArgs>
        fields: Prisma.ExtraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExtraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExtraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          findFirst: {
            args: Prisma.ExtraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExtraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          findMany: {
            args: Prisma.ExtraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>[]
          }
          create: {
            args: Prisma.ExtraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          createMany: {
            args: Prisma.ExtraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExtraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          update: {
            args: Prisma.ExtraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          deleteMany: {
            args: Prisma.ExtraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExtraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExtraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          aggregate: {
            args: Prisma.ExtraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExtra>
          }
          groupBy: {
            args: Prisma.ExtraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExtraGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExtraCountArgs<ExtArgs>
            result: $Utils.Optional<ExtraCountAggregateOutputType> | number
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
    plato?: PlatoOmit
    extraPlato?: ExtraPlatoOmit
    extra?: ExtraOmit
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
   * Count Type PlatoCountOutputType
   */

  export type PlatoCountOutputType = {
    extras: number
  }

  export type PlatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    extras?: boolean | PlatoCountOutputTypeCountExtrasArgs
  }

  // Custom InputTypes
  /**
   * PlatoCountOutputType without action
   */
  export type PlatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatoCountOutputType
     */
    select?: PlatoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatoCountOutputType without action
   */
  export type PlatoCountOutputTypeCountExtrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtraPlatoWhereInput
  }


  /**
   * Count Type ExtraCountOutputType
   */

  export type ExtraCountOutputType = {
    platos: number
  }

  export type ExtraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platos?: boolean | ExtraCountOutputTypeCountPlatosArgs
  }

  // Custom InputTypes
  /**
   * ExtraCountOutputType without action
   */
  export type ExtraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraCountOutputType
     */
    select?: ExtraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExtraCountOutputType without action
   */
  export type ExtraCountOutputTypeCountPlatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtraPlatoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Plato
   */

  export type AggregatePlato = {
    _count: PlatoCountAggregateOutputType | null
    _avg: PlatoAvgAggregateOutputType | null
    _sum: PlatoSumAggregateOutputType | null
    _min: PlatoMinAggregateOutputType | null
    _max: PlatoMaxAggregateOutputType | null
  }

  export type PlatoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type PlatoSumAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type PlatoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
  }

  export type PlatoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
  }

  export type PlatoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    _all: number
  }


  export type PlatoAvgAggregateInputType = {
    id?: true
    precio?: true
  }

  export type PlatoSumAggregateInputType = {
    id?: true
    precio?: true
  }

  export type PlatoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
  }

  export type PlatoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
  }

  export type PlatoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    _all?: true
  }

  export type PlatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plato to aggregate.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platoes
    **/
    _count?: true | PlatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatoMaxAggregateInputType
  }

  export type GetPlatoAggregateType<T extends PlatoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlato[P]>
      : GetScalarType<T[P], AggregatePlato[P]>
  }




  export type PlatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatoWhereInput
    orderBy?: PlatoOrderByWithAggregationInput | PlatoOrderByWithAggregationInput[]
    by: PlatoScalarFieldEnum[] | PlatoScalarFieldEnum
    having?: PlatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatoCountAggregateInputType | true
    _avg?: PlatoAvgAggregateInputType
    _sum?: PlatoSumAggregateInputType
    _min?: PlatoMinAggregateInputType
    _max?: PlatoMaxAggregateInputType
  }

  export type PlatoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    precio: number
    _count: PlatoCountAggregateOutputType | null
    _avg: PlatoAvgAggregateOutputType | null
    _sum: PlatoSumAggregateOutputType | null
    _min: PlatoMinAggregateOutputType | null
    _max: PlatoMaxAggregateOutputType | null
  }

  type GetPlatoGroupByPayload<T extends PlatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatoGroupByOutputType[P]>
            : GetScalarType<T[P], PlatoGroupByOutputType[P]>
        }
      >
    >


  export type PlatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    extras?: boolean | Plato$extrasArgs<ExtArgs>
    _count?: boolean | PlatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plato"]>



  export type PlatoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
  }

  export type PlatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio", ExtArgs["result"]["plato"]>
  export type PlatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    extras?: boolean | Plato$extrasArgs<ExtArgs>
    _count?: boolean | PlatoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plato"
    objects: {
      extras: Prisma.$ExtraPlatoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      precio: number
    }, ExtArgs["result"]["plato"]>
    composites: {}
  }

  type PlatoGetPayload<S extends boolean | null | undefined | PlatoDefaultArgs> = $Result.GetResult<Prisma.$PlatoPayload, S>

  type PlatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatoCountAggregateInputType | true
    }

  export interface PlatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plato'], meta: { name: 'Plato' } }
    /**
     * Find zero or one Plato that matches the filter.
     * @param {PlatoFindUniqueArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatoFindUniqueArgs>(args: SelectSubset<T, PlatoFindUniqueArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatoFindUniqueOrThrowArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoFindFirstArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatoFindFirstArgs>(args?: SelectSubset<T, PlatoFindFirstArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoFindFirstOrThrowArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platoes
     * const platoes = await prisma.plato.findMany()
     * 
     * // Get first 10 Platoes
     * const platoes = await prisma.plato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platoWithIdOnly = await prisma.plato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatoFindManyArgs>(args?: SelectSubset<T, PlatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plato.
     * @param {PlatoCreateArgs} args - Arguments to create a Plato.
     * @example
     * // Create one Plato
     * const Plato = await prisma.plato.create({
     *   data: {
     *     // ... data to create a Plato
     *   }
     * })
     * 
     */
    create<T extends PlatoCreateArgs>(args: SelectSubset<T, PlatoCreateArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platoes.
     * @param {PlatoCreateManyArgs} args - Arguments to create many Platoes.
     * @example
     * // Create many Platoes
     * const plato = await prisma.plato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatoCreateManyArgs>(args?: SelectSubset<T, PlatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plato.
     * @param {PlatoDeleteArgs} args - Arguments to delete one Plato.
     * @example
     * // Delete one Plato
     * const Plato = await prisma.plato.delete({
     *   where: {
     *     // ... filter to delete one Plato
     *   }
     * })
     * 
     */
    delete<T extends PlatoDeleteArgs>(args: SelectSubset<T, PlatoDeleteArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plato.
     * @param {PlatoUpdateArgs} args - Arguments to update one Plato.
     * @example
     * // Update one Plato
     * const plato = await prisma.plato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatoUpdateArgs>(args: SelectSubset<T, PlatoUpdateArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platoes.
     * @param {PlatoDeleteManyArgs} args - Arguments to filter Platoes to delete.
     * @example
     * // Delete a few Platoes
     * const { count } = await prisma.plato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatoDeleteManyArgs>(args?: SelectSubset<T, PlatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platoes
     * const plato = await prisma.plato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatoUpdateManyArgs>(args: SelectSubset<T, PlatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plato.
     * @param {PlatoUpsertArgs} args - Arguments to update or create a Plato.
     * @example
     * // Update or create a Plato
     * const plato = await prisma.plato.upsert({
     *   create: {
     *     // ... data to create a Plato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plato we want to update
     *   }
     * })
     */
    upsert<T extends PlatoUpsertArgs>(args: SelectSubset<T, PlatoUpsertArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoCountArgs} args - Arguments to filter Platoes to count.
     * @example
     * // Count the number of Platoes
     * const count = await prisma.plato.count({
     *   where: {
     *     // ... the filter for the Platoes we want to count
     *   }
     * })
    **/
    count<T extends PlatoCountArgs>(
      args?: Subset<T, PlatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlatoAggregateArgs>(args: Subset<T, PlatoAggregateArgs>): Prisma.PrismaPromise<GetPlatoAggregateType<T>>

    /**
     * Group by Plato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoGroupByArgs} args - Group by arguments.
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
      T extends PlatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatoGroupByArgs['orderBy'] }
        : { orderBy?: PlatoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plato model
   */
  readonly fields: PlatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    extras<T extends Plato$extrasArgs<ExtArgs> = {}>(args?: Subset<T, Plato$extrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtraPlatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plato model
   */
  interface PlatoFieldRefs {
    readonly id: FieldRef<"Plato", 'Int'>
    readonly nombre: FieldRef<"Plato", 'String'>
    readonly descripcion: FieldRef<"Plato", 'String'>
    readonly precio: FieldRef<"Plato", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Plato findUnique
   */
  export type PlatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato findUniqueOrThrow
   */
  export type PlatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato findFirst
   */
  export type PlatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platoes.
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platoes.
     */
    distinct?: PlatoScalarFieldEnum | PlatoScalarFieldEnum[]
  }

  /**
   * Plato findFirstOrThrow
   */
  export type PlatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platoes.
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platoes.
     */
    distinct?: PlatoScalarFieldEnum | PlatoScalarFieldEnum[]
  }

  /**
   * Plato findMany
   */
  export type PlatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Platoes to fetch.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platoes.
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    distinct?: PlatoScalarFieldEnum | PlatoScalarFieldEnum[]
  }

  /**
   * Plato create
   */
  export type PlatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * The data needed to create a Plato.
     */
    data: XOR<PlatoCreateInput, PlatoUncheckedCreateInput>
  }

  /**
   * Plato createMany
   */
  export type PlatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platoes.
     */
    data: PlatoCreateManyInput | PlatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plato update
   */
  export type PlatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * The data needed to update a Plato.
     */
    data: XOR<PlatoUpdateInput, PlatoUncheckedUpdateInput>
    /**
     * Choose, which Plato to update.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato updateMany
   */
  export type PlatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platoes.
     */
    data: XOR<PlatoUpdateManyMutationInput, PlatoUncheckedUpdateManyInput>
    /**
     * Filter which Platoes to update
     */
    where?: PlatoWhereInput
    /**
     * Limit how many Platoes to update.
     */
    limit?: number
  }

  /**
   * Plato upsert
   */
  export type PlatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * The filter to search for the Plato to update in case it exists.
     */
    where: PlatoWhereUniqueInput
    /**
     * In case the Plato found by the `where` argument doesn't exist, create a new Plato with this data.
     */
    create: XOR<PlatoCreateInput, PlatoUncheckedCreateInput>
    /**
     * In case the Plato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatoUpdateInput, PlatoUncheckedUpdateInput>
  }

  /**
   * Plato delete
   */
  export type PlatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter which Plato to delete.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato deleteMany
   */
  export type PlatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platoes to delete
     */
    where?: PlatoWhereInput
    /**
     * Limit how many Platoes to delete.
     */
    limit?: number
  }

  /**
   * Plato.extras
   */
  export type Plato$extrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
    where?: ExtraPlatoWhereInput
    orderBy?: ExtraPlatoOrderByWithRelationInput | ExtraPlatoOrderByWithRelationInput[]
    cursor?: ExtraPlatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExtraPlatoScalarFieldEnum | ExtraPlatoScalarFieldEnum[]
  }

  /**
   * Plato without action
   */
  export type PlatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
  }


  /**
   * Model ExtraPlato
   */

  export type AggregateExtraPlato = {
    _count: ExtraPlatoCountAggregateOutputType | null
    _avg: ExtraPlatoAvgAggregateOutputType | null
    _sum: ExtraPlatoSumAggregateOutputType | null
    _min: ExtraPlatoMinAggregateOutputType | null
    _max: ExtraPlatoMaxAggregateOutputType | null
  }

  export type ExtraPlatoAvgAggregateOutputType = {
    id: number | null
    idPlato: number | null
    idExtra: number | null
  }

  export type ExtraPlatoSumAggregateOutputType = {
    id: number | null
    idPlato: number | null
    idExtra: number | null
  }

  export type ExtraPlatoMinAggregateOutputType = {
    id: number | null
    idPlato: number | null
    idExtra: number | null
  }

  export type ExtraPlatoMaxAggregateOutputType = {
    id: number | null
    idPlato: number | null
    idExtra: number | null
  }

  export type ExtraPlatoCountAggregateOutputType = {
    id: number
    idPlato: number
    idExtra: number
    _all: number
  }


  export type ExtraPlatoAvgAggregateInputType = {
    id?: true
    idPlato?: true
    idExtra?: true
  }

  export type ExtraPlatoSumAggregateInputType = {
    id?: true
    idPlato?: true
    idExtra?: true
  }

  export type ExtraPlatoMinAggregateInputType = {
    id?: true
    idPlato?: true
    idExtra?: true
  }

  export type ExtraPlatoMaxAggregateInputType = {
    id?: true
    idPlato?: true
    idExtra?: true
  }

  export type ExtraPlatoCountAggregateInputType = {
    id?: true
    idPlato?: true
    idExtra?: true
    _all?: true
  }

  export type ExtraPlatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExtraPlato to aggregate.
     */
    where?: ExtraPlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExtraPlatoes to fetch.
     */
    orderBy?: ExtraPlatoOrderByWithRelationInput | ExtraPlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExtraPlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExtraPlatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExtraPlatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExtraPlatoes
    **/
    _count?: true | ExtraPlatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExtraPlatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExtraPlatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExtraPlatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExtraPlatoMaxAggregateInputType
  }

  export type GetExtraPlatoAggregateType<T extends ExtraPlatoAggregateArgs> = {
        [P in keyof T & keyof AggregateExtraPlato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtraPlato[P]>
      : GetScalarType<T[P], AggregateExtraPlato[P]>
  }




  export type ExtraPlatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtraPlatoWhereInput
    orderBy?: ExtraPlatoOrderByWithAggregationInput | ExtraPlatoOrderByWithAggregationInput[]
    by: ExtraPlatoScalarFieldEnum[] | ExtraPlatoScalarFieldEnum
    having?: ExtraPlatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExtraPlatoCountAggregateInputType | true
    _avg?: ExtraPlatoAvgAggregateInputType
    _sum?: ExtraPlatoSumAggregateInputType
    _min?: ExtraPlatoMinAggregateInputType
    _max?: ExtraPlatoMaxAggregateInputType
  }

  export type ExtraPlatoGroupByOutputType = {
    id: number
    idPlato: number
    idExtra: number
    _count: ExtraPlatoCountAggregateOutputType | null
    _avg: ExtraPlatoAvgAggregateOutputType | null
    _sum: ExtraPlatoSumAggregateOutputType | null
    _min: ExtraPlatoMinAggregateOutputType | null
    _max: ExtraPlatoMaxAggregateOutputType | null
  }

  type GetExtraPlatoGroupByPayload<T extends ExtraPlatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExtraPlatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExtraPlatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExtraPlatoGroupByOutputType[P]>
            : GetScalarType<T[P], ExtraPlatoGroupByOutputType[P]>
        }
      >
    >


  export type ExtraPlatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPlato?: boolean
    idExtra?: boolean
    plato?: boolean | ExtraPlato$platoArgs<ExtArgs>
    extra?: boolean | ExtraPlato$extraArgs<ExtArgs>
  }, ExtArgs["result"]["extraPlato"]>



  export type ExtraPlatoSelectScalar = {
    id?: boolean
    idPlato?: boolean
    idExtra?: boolean
  }

  export type ExtraPlatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idPlato" | "idExtra", ExtArgs["result"]["extraPlato"]>
  export type ExtraPlatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plato?: boolean | ExtraPlato$platoArgs<ExtArgs>
    extra?: boolean | ExtraPlato$extraArgs<ExtArgs>
  }

  export type $ExtraPlatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExtraPlato"
    objects: {
      plato: Prisma.$PlatoPayload<ExtArgs> | null
      extra: Prisma.$ExtraPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idPlato: number
      idExtra: number
    }, ExtArgs["result"]["extraPlato"]>
    composites: {}
  }

  type ExtraPlatoGetPayload<S extends boolean | null | undefined | ExtraPlatoDefaultArgs> = $Result.GetResult<Prisma.$ExtraPlatoPayload, S>

  type ExtraPlatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExtraPlatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExtraPlatoCountAggregateInputType | true
    }

  export interface ExtraPlatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExtraPlato'], meta: { name: 'ExtraPlato' } }
    /**
     * Find zero or one ExtraPlato that matches the filter.
     * @param {ExtraPlatoFindUniqueArgs} args - Arguments to find a ExtraPlato
     * @example
     * // Get one ExtraPlato
     * const extraPlato = await prisma.extraPlato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExtraPlatoFindUniqueArgs>(args: SelectSubset<T, ExtraPlatoFindUniqueArgs<ExtArgs>>): Prisma__ExtraPlatoClient<$Result.GetResult<Prisma.$ExtraPlatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExtraPlato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExtraPlatoFindUniqueOrThrowArgs} args - Arguments to find a ExtraPlato
     * @example
     * // Get one ExtraPlato
     * const extraPlato = await prisma.extraPlato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExtraPlatoFindUniqueOrThrowArgs>(args: SelectSubset<T, ExtraPlatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExtraPlatoClient<$Result.GetResult<Prisma.$ExtraPlatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExtraPlato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraPlatoFindFirstArgs} args - Arguments to find a ExtraPlato
     * @example
     * // Get one ExtraPlato
     * const extraPlato = await prisma.extraPlato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExtraPlatoFindFirstArgs>(args?: SelectSubset<T, ExtraPlatoFindFirstArgs<ExtArgs>>): Prisma__ExtraPlatoClient<$Result.GetResult<Prisma.$ExtraPlatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExtraPlato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraPlatoFindFirstOrThrowArgs} args - Arguments to find a ExtraPlato
     * @example
     * // Get one ExtraPlato
     * const extraPlato = await prisma.extraPlato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExtraPlatoFindFirstOrThrowArgs>(args?: SelectSubset<T, ExtraPlatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExtraPlatoClient<$Result.GetResult<Prisma.$ExtraPlatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExtraPlatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraPlatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExtraPlatoes
     * const extraPlatoes = await prisma.extraPlato.findMany()
     * 
     * // Get first 10 ExtraPlatoes
     * const extraPlatoes = await prisma.extraPlato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const extraPlatoWithIdOnly = await prisma.extraPlato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExtraPlatoFindManyArgs>(args?: SelectSubset<T, ExtraPlatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtraPlatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExtraPlato.
     * @param {ExtraPlatoCreateArgs} args - Arguments to create a ExtraPlato.
     * @example
     * // Create one ExtraPlato
     * const ExtraPlato = await prisma.extraPlato.create({
     *   data: {
     *     // ... data to create a ExtraPlato
     *   }
     * })
     * 
     */
    create<T extends ExtraPlatoCreateArgs>(args: SelectSubset<T, ExtraPlatoCreateArgs<ExtArgs>>): Prisma__ExtraPlatoClient<$Result.GetResult<Prisma.$ExtraPlatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExtraPlatoes.
     * @param {ExtraPlatoCreateManyArgs} args - Arguments to create many ExtraPlatoes.
     * @example
     * // Create many ExtraPlatoes
     * const extraPlato = await prisma.extraPlato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExtraPlatoCreateManyArgs>(args?: SelectSubset<T, ExtraPlatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExtraPlato.
     * @param {ExtraPlatoDeleteArgs} args - Arguments to delete one ExtraPlato.
     * @example
     * // Delete one ExtraPlato
     * const ExtraPlato = await prisma.extraPlato.delete({
     *   where: {
     *     // ... filter to delete one ExtraPlato
     *   }
     * })
     * 
     */
    delete<T extends ExtraPlatoDeleteArgs>(args: SelectSubset<T, ExtraPlatoDeleteArgs<ExtArgs>>): Prisma__ExtraPlatoClient<$Result.GetResult<Prisma.$ExtraPlatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExtraPlato.
     * @param {ExtraPlatoUpdateArgs} args - Arguments to update one ExtraPlato.
     * @example
     * // Update one ExtraPlato
     * const extraPlato = await prisma.extraPlato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExtraPlatoUpdateArgs>(args: SelectSubset<T, ExtraPlatoUpdateArgs<ExtArgs>>): Prisma__ExtraPlatoClient<$Result.GetResult<Prisma.$ExtraPlatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExtraPlatoes.
     * @param {ExtraPlatoDeleteManyArgs} args - Arguments to filter ExtraPlatoes to delete.
     * @example
     * // Delete a few ExtraPlatoes
     * const { count } = await prisma.extraPlato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExtraPlatoDeleteManyArgs>(args?: SelectSubset<T, ExtraPlatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExtraPlatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraPlatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExtraPlatoes
     * const extraPlato = await prisma.extraPlato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExtraPlatoUpdateManyArgs>(args: SelectSubset<T, ExtraPlatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExtraPlato.
     * @param {ExtraPlatoUpsertArgs} args - Arguments to update or create a ExtraPlato.
     * @example
     * // Update or create a ExtraPlato
     * const extraPlato = await prisma.extraPlato.upsert({
     *   create: {
     *     // ... data to create a ExtraPlato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExtraPlato we want to update
     *   }
     * })
     */
    upsert<T extends ExtraPlatoUpsertArgs>(args: SelectSubset<T, ExtraPlatoUpsertArgs<ExtArgs>>): Prisma__ExtraPlatoClient<$Result.GetResult<Prisma.$ExtraPlatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExtraPlatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraPlatoCountArgs} args - Arguments to filter ExtraPlatoes to count.
     * @example
     * // Count the number of ExtraPlatoes
     * const count = await prisma.extraPlato.count({
     *   where: {
     *     // ... the filter for the ExtraPlatoes we want to count
     *   }
     * })
    **/
    count<T extends ExtraPlatoCountArgs>(
      args?: Subset<T, ExtraPlatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExtraPlatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExtraPlato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraPlatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExtraPlatoAggregateArgs>(args: Subset<T, ExtraPlatoAggregateArgs>): Prisma.PrismaPromise<GetExtraPlatoAggregateType<T>>

    /**
     * Group by ExtraPlato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraPlatoGroupByArgs} args - Group by arguments.
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
      T extends ExtraPlatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExtraPlatoGroupByArgs['orderBy'] }
        : { orderBy?: ExtraPlatoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExtraPlatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtraPlatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExtraPlato model
   */
  readonly fields: ExtraPlatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExtraPlato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExtraPlatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plato<T extends ExtraPlato$platoArgs<ExtArgs> = {}>(args?: Subset<T, ExtraPlato$platoArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    extra<T extends ExtraPlato$extraArgs<ExtArgs> = {}>(args?: Subset<T, ExtraPlato$extraArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExtraPlato model
   */
  interface ExtraPlatoFieldRefs {
    readonly id: FieldRef<"ExtraPlato", 'Int'>
    readonly idPlato: FieldRef<"ExtraPlato", 'Int'>
    readonly idExtra: FieldRef<"ExtraPlato", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExtraPlato findUnique
   */
  export type ExtraPlatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
    /**
     * Filter, which ExtraPlato to fetch.
     */
    where: ExtraPlatoWhereUniqueInput
  }

  /**
   * ExtraPlato findUniqueOrThrow
   */
  export type ExtraPlatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
    /**
     * Filter, which ExtraPlato to fetch.
     */
    where: ExtraPlatoWhereUniqueInput
  }

  /**
   * ExtraPlato findFirst
   */
  export type ExtraPlatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
    /**
     * Filter, which ExtraPlato to fetch.
     */
    where?: ExtraPlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExtraPlatoes to fetch.
     */
    orderBy?: ExtraPlatoOrderByWithRelationInput | ExtraPlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExtraPlatoes.
     */
    cursor?: ExtraPlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExtraPlatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExtraPlatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExtraPlatoes.
     */
    distinct?: ExtraPlatoScalarFieldEnum | ExtraPlatoScalarFieldEnum[]
  }

  /**
   * ExtraPlato findFirstOrThrow
   */
  export type ExtraPlatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
    /**
     * Filter, which ExtraPlato to fetch.
     */
    where?: ExtraPlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExtraPlatoes to fetch.
     */
    orderBy?: ExtraPlatoOrderByWithRelationInput | ExtraPlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExtraPlatoes.
     */
    cursor?: ExtraPlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExtraPlatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExtraPlatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExtraPlatoes.
     */
    distinct?: ExtraPlatoScalarFieldEnum | ExtraPlatoScalarFieldEnum[]
  }

  /**
   * ExtraPlato findMany
   */
  export type ExtraPlatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
    /**
     * Filter, which ExtraPlatoes to fetch.
     */
    where?: ExtraPlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExtraPlatoes to fetch.
     */
    orderBy?: ExtraPlatoOrderByWithRelationInput | ExtraPlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExtraPlatoes.
     */
    cursor?: ExtraPlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExtraPlatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExtraPlatoes.
     */
    skip?: number
    distinct?: ExtraPlatoScalarFieldEnum | ExtraPlatoScalarFieldEnum[]
  }

  /**
   * ExtraPlato create
   */
  export type ExtraPlatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
    /**
     * The data needed to create a ExtraPlato.
     */
    data: XOR<ExtraPlatoCreateInput, ExtraPlatoUncheckedCreateInput>
  }

  /**
   * ExtraPlato createMany
   */
  export type ExtraPlatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExtraPlatoes.
     */
    data: ExtraPlatoCreateManyInput | ExtraPlatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExtraPlato update
   */
  export type ExtraPlatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
    /**
     * The data needed to update a ExtraPlato.
     */
    data: XOR<ExtraPlatoUpdateInput, ExtraPlatoUncheckedUpdateInput>
    /**
     * Choose, which ExtraPlato to update.
     */
    where: ExtraPlatoWhereUniqueInput
  }

  /**
   * ExtraPlato updateMany
   */
  export type ExtraPlatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExtraPlatoes.
     */
    data: XOR<ExtraPlatoUpdateManyMutationInput, ExtraPlatoUncheckedUpdateManyInput>
    /**
     * Filter which ExtraPlatoes to update
     */
    where?: ExtraPlatoWhereInput
    /**
     * Limit how many ExtraPlatoes to update.
     */
    limit?: number
  }

  /**
   * ExtraPlato upsert
   */
  export type ExtraPlatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
    /**
     * The filter to search for the ExtraPlato to update in case it exists.
     */
    where: ExtraPlatoWhereUniqueInput
    /**
     * In case the ExtraPlato found by the `where` argument doesn't exist, create a new ExtraPlato with this data.
     */
    create: XOR<ExtraPlatoCreateInput, ExtraPlatoUncheckedCreateInput>
    /**
     * In case the ExtraPlato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExtraPlatoUpdateInput, ExtraPlatoUncheckedUpdateInput>
  }

  /**
   * ExtraPlato delete
   */
  export type ExtraPlatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
    /**
     * Filter which ExtraPlato to delete.
     */
    where: ExtraPlatoWhereUniqueInput
  }

  /**
   * ExtraPlato deleteMany
   */
  export type ExtraPlatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExtraPlatoes to delete
     */
    where?: ExtraPlatoWhereInput
    /**
     * Limit how many ExtraPlatoes to delete.
     */
    limit?: number
  }

  /**
   * ExtraPlato.plato
   */
  export type ExtraPlato$platoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    where?: PlatoWhereInput
  }

  /**
   * ExtraPlato.extra
   */
  export type ExtraPlato$extraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    where?: ExtraWhereInput
  }

  /**
   * ExtraPlato without action
   */
  export type ExtraPlatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
  }


  /**
   * Model Extra
   */

  export type AggregateExtra = {
    _count: ExtraCountAggregateOutputType | null
    _avg: ExtraAvgAggregateOutputType | null
    _sum: ExtraSumAggregateOutputType | null
    _min: ExtraMinAggregateOutputType | null
    _max: ExtraMaxAggregateOutputType | null
  }

  export type ExtraAvgAggregateOutputType = {
    id: number | null
  }

  export type ExtraSumAggregateOutputType = {
    id: number | null
  }

  export type ExtraMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ExtraMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ExtraCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type ExtraAvgAggregateInputType = {
    id?: true
  }

  export type ExtraSumAggregateInputType = {
    id?: true
  }

  export type ExtraMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ExtraMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ExtraCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type ExtraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extra to aggregate.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Extras
    **/
    _count?: true | ExtraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExtraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExtraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExtraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExtraMaxAggregateInputType
  }

  export type GetExtraAggregateType<T extends ExtraAggregateArgs> = {
        [P in keyof T & keyof AggregateExtra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtra[P]>
      : GetScalarType<T[P], AggregateExtra[P]>
  }




  export type ExtraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtraWhereInput
    orderBy?: ExtraOrderByWithAggregationInput | ExtraOrderByWithAggregationInput[]
    by: ExtraScalarFieldEnum[] | ExtraScalarFieldEnum
    having?: ExtraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExtraCountAggregateInputType | true
    _avg?: ExtraAvgAggregateInputType
    _sum?: ExtraSumAggregateInputType
    _min?: ExtraMinAggregateInputType
    _max?: ExtraMaxAggregateInputType
  }

  export type ExtraGroupByOutputType = {
    id: number
    nombre: string
    _count: ExtraCountAggregateOutputType | null
    _avg: ExtraAvgAggregateOutputType | null
    _sum: ExtraSumAggregateOutputType | null
    _min: ExtraMinAggregateOutputType | null
    _max: ExtraMaxAggregateOutputType | null
  }

  type GetExtraGroupByPayload<T extends ExtraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExtraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExtraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExtraGroupByOutputType[P]>
            : GetScalarType<T[P], ExtraGroupByOutputType[P]>
        }
      >
    >


  export type ExtraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    platos?: boolean | Extra$platosArgs<ExtArgs>
    _count?: boolean | ExtraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["extra"]>



  export type ExtraSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type ExtraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["extra"]>
  export type ExtraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platos?: boolean | Extra$platosArgs<ExtArgs>
    _count?: boolean | ExtraCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExtraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Extra"
    objects: {
      platos: Prisma.$ExtraPlatoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["extra"]>
    composites: {}
  }

  type ExtraGetPayload<S extends boolean | null | undefined | ExtraDefaultArgs> = $Result.GetResult<Prisma.$ExtraPayload, S>

  type ExtraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExtraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExtraCountAggregateInputType | true
    }

  export interface ExtraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Extra'], meta: { name: 'Extra' } }
    /**
     * Find zero or one Extra that matches the filter.
     * @param {ExtraFindUniqueArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExtraFindUniqueArgs>(args: SelectSubset<T, ExtraFindUniqueArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Extra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExtraFindUniqueOrThrowArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExtraFindUniqueOrThrowArgs>(args: SelectSubset<T, ExtraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraFindFirstArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExtraFindFirstArgs>(args?: SelectSubset<T, ExtraFindFirstArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraFindFirstOrThrowArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExtraFindFirstOrThrowArgs>(args?: SelectSubset<T, ExtraFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Extras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Extras
     * const extras = await prisma.extra.findMany()
     * 
     * // Get first 10 Extras
     * const extras = await prisma.extra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const extraWithIdOnly = await prisma.extra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExtraFindManyArgs>(args?: SelectSubset<T, ExtraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Extra.
     * @param {ExtraCreateArgs} args - Arguments to create a Extra.
     * @example
     * // Create one Extra
     * const Extra = await prisma.extra.create({
     *   data: {
     *     // ... data to create a Extra
     *   }
     * })
     * 
     */
    create<T extends ExtraCreateArgs>(args: SelectSubset<T, ExtraCreateArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Extras.
     * @param {ExtraCreateManyArgs} args - Arguments to create many Extras.
     * @example
     * // Create many Extras
     * const extra = await prisma.extra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExtraCreateManyArgs>(args?: SelectSubset<T, ExtraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Extra.
     * @param {ExtraDeleteArgs} args - Arguments to delete one Extra.
     * @example
     * // Delete one Extra
     * const Extra = await prisma.extra.delete({
     *   where: {
     *     // ... filter to delete one Extra
     *   }
     * })
     * 
     */
    delete<T extends ExtraDeleteArgs>(args: SelectSubset<T, ExtraDeleteArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Extra.
     * @param {ExtraUpdateArgs} args - Arguments to update one Extra.
     * @example
     * // Update one Extra
     * const extra = await prisma.extra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExtraUpdateArgs>(args: SelectSubset<T, ExtraUpdateArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Extras.
     * @param {ExtraDeleteManyArgs} args - Arguments to filter Extras to delete.
     * @example
     * // Delete a few Extras
     * const { count } = await prisma.extra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExtraDeleteManyArgs>(args?: SelectSubset<T, ExtraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Extras
     * const extra = await prisma.extra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExtraUpdateManyArgs>(args: SelectSubset<T, ExtraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Extra.
     * @param {ExtraUpsertArgs} args - Arguments to update or create a Extra.
     * @example
     * // Update or create a Extra
     * const extra = await prisma.extra.upsert({
     *   create: {
     *     // ... data to create a Extra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Extra we want to update
     *   }
     * })
     */
    upsert<T extends ExtraUpsertArgs>(args: SelectSubset<T, ExtraUpsertArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraCountArgs} args - Arguments to filter Extras to count.
     * @example
     * // Count the number of Extras
     * const count = await prisma.extra.count({
     *   where: {
     *     // ... the filter for the Extras we want to count
     *   }
     * })
    **/
    count<T extends ExtraCountArgs>(
      args?: Subset<T, ExtraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExtraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Extra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExtraAggregateArgs>(args: Subset<T, ExtraAggregateArgs>): Prisma.PrismaPromise<GetExtraAggregateType<T>>

    /**
     * Group by Extra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraGroupByArgs} args - Group by arguments.
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
      T extends ExtraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExtraGroupByArgs['orderBy'] }
        : { orderBy?: ExtraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExtraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Extra model
   */
  readonly fields: ExtraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Extra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExtraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    platos<T extends Extra$platosArgs<ExtArgs> = {}>(args?: Subset<T, Extra$platosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtraPlatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Extra model
   */
  interface ExtraFieldRefs {
    readonly id: FieldRef<"Extra", 'Int'>
    readonly nombre: FieldRef<"Extra", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Extra findUnique
   */
  export type ExtraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra findUniqueOrThrow
   */
  export type ExtraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra findFirst
   */
  export type ExtraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extras.
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extras.
     */
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * Extra findFirstOrThrow
   */
  export type ExtraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extras.
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extras.
     */
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * Extra findMany
   */
  export type ExtraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter, which Extras to fetch.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Extras.
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * Extra create
   */
  export type ExtraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * The data needed to create a Extra.
     */
    data: XOR<ExtraCreateInput, ExtraUncheckedCreateInput>
  }

  /**
   * Extra createMany
   */
  export type ExtraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Extras.
     */
    data: ExtraCreateManyInput | ExtraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Extra update
   */
  export type ExtraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * The data needed to update a Extra.
     */
    data: XOR<ExtraUpdateInput, ExtraUncheckedUpdateInput>
    /**
     * Choose, which Extra to update.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra updateMany
   */
  export type ExtraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Extras.
     */
    data: XOR<ExtraUpdateManyMutationInput, ExtraUncheckedUpdateManyInput>
    /**
     * Filter which Extras to update
     */
    where?: ExtraWhereInput
    /**
     * Limit how many Extras to update.
     */
    limit?: number
  }

  /**
   * Extra upsert
   */
  export type ExtraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * The filter to search for the Extra to update in case it exists.
     */
    where: ExtraWhereUniqueInput
    /**
     * In case the Extra found by the `where` argument doesn't exist, create a new Extra with this data.
     */
    create: XOR<ExtraCreateInput, ExtraUncheckedCreateInput>
    /**
     * In case the Extra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExtraUpdateInput, ExtraUncheckedUpdateInput>
  }

  /**
   * Extra delete
   */
  export type ExtraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter which Extra to delete.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra deleteMany
   */
  export type ExtraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extras to delete
     */
    where?: ExtraWhereInput
    /**
     * Limit how many Extras to delete.
     */
    limit?: number
  }

  /**
   * Extra.platos
   */
  export type Extra$platosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraPlato
     */
    select?: ExtraPlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtraPlato
     */
    omit?: ExtraPlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraPlatoInclude<ExtArgs> | null
    where?: ExtraPlatoWhereInput
    orderBy?: ExtraPlatoOrderByWithRelationInput | ExtraPlatoOrderByWithRelationInput[]
    cursor?: ExtraPlatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExtraPlatoScalarFieldEnum | ExtraPlatoScalarFieldEnum[]
  }

  /**
   * Extra without action
   */
  export type ExtraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlatoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio'
  };

  export type PlatoScalarFieldEnum = (typeof PlatoScalarFieldEnum)[keyof typeof PlatoScalarFieldEnum]


  export const ExtraPlatoScalarFieldEnum: {
    id: 'id',
    idPlato: 'idPlato',
    idExtra: 'idExtra'
  };

  export type ExtraPlatoScalarFieldEnum = (typeof ExtraPlatoScalarFieldEnum)[keyof typeof ExtraPlatoScalarFieldEnum]


  export const ExtraScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type ExtraScalarFieldEnum = (typeof ExtraScalarFieldEnum)[keyof typeof ExtraScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const PlatoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type PlatoOrderByRelevanceFieldEnum = (typeof PlatoOrderByRelevanceFieldEnum)[keyof typeof PlatoOrderByRelevanceFieldEnum]


  export const ExtraOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type ExtraOrderByRelevanceFieldEnum = (typeof ExtraOrderByRelevanceFieldEnum)[keyof typeof ExtraOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PlatoWhereInput = {
    AND?: PlatoWhereInput | PlatoWhereInput[]
    OR?: PlatoWhereInput[]
    NOT?: PlatoWhereInput | PlatoWhereInput[]
    id?: IntFilter<"Plato"> | number
    nombre?: StringFilter<"Plato"> | string
    descripcion?: StringFilter<"Plato"> | string
    precio?: FloatFilter<"Plato"> | number
    extras?: ExtraPlatoListRelationFilter
  }

  export type PlatoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    extras?: ExtraPlatoOrderByRelationAggregateInput
    _relevance?: PlatoOrderByRelevanceInput
  }

  export type PlatoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlatoWhereInput | PlatoWhereInput[]
    OR?: PlatoWhereInput[]
    NOT?: PlatoWhereInput | PlatoWhereInput[]
    nombre?: StringFilter<"Plato"> | string
    descripcion?: StringFilter<"Plato"> | string
    precio?: FloatFilter<"Plato"> | number
    extras?: ExtraPlatoListRelationFilter
  }, "id">

  export type PlatoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    _count?: PlatoCountOrderByAggregateInput
    _avg?: PlatoAvgOrderByAggregateInput
    _max?: PlatoMaxOrderByAggregateInput
    _min?: PlatoMinOrderByAggregateInput
    _sum?: PlatoSumOrderByAggregateInput
  }

  export type PlatoScalarWhereWithAggregatesInput = {
    AND?: PlatoScalarWhereWithAggregatesInput | PlatoScalarWhereWithAggregatesInput[]
    OR?: PlatoScalarWhereWithAggregatesInput[]
    NOT?: PlatoScalarWhereWithAggregatesInput | PlatoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plato"> | number
    nombre?: StringWithAggregatesFilter<"Plato"> | string
    descripcion?: StringWithAggregatesFilter<"Plato"> | string
    precio?: FloatWithAggregatesFilter<"Plato"> | number
  }

  export type ExtraPlatoWhereInput = {
    AND?: ExtraPlatoWhereInput | ExtraPlatoWhereInput[]
    OR?: ExtraPlatoWhereInput[]
    NOT?: ExtraPlatoWhereInput | ExtraPlatoWhereInput[]
    id?: IntFilter<"ExtraPlato"> | number
    idPlato?: IntFilter<"ExtraPlato"> | number
    idExtra?: IntFilter<"ExtraPlato"> | number
    plato?: XOR<PlatoNullableScalarRelationFilter, PlatoWhereInput> | null
    extra?: XOR<ExtraNullableScalarRelationFilter, ExtraWhereInput> | null
  }

  export type ExtraPlatoOrderByWithRelationInput = {
    id?: SortOrder
    idPlato?: SortOrder
    idExtra?: SortOrder
    plato?: PlatoOrderByWithRelationInput
    extra?: ExtraOrderByWithRelationInput
  }

  export type ExtraPlatoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExtraPlatoWhereInput | ExtraPlatoWhereInput[]
    OR?: ExtraPlatoWhereInput[]
    NOT?: ExtraPlatoWhereInput | ExtraPlatoWhereInput[]
    idPlato?: IntFilter<"ExtraPlato"> | number
    idExtra?: IntFilter<"ExtraPlato"> | number
    plato?: XOR<PlatoNullableScalarRelationFilter, PlatoWhereInput> | null
    extra?: XOR<ExtraNullableScalarRelationFilter, ExtraWhereInput> | null
  }, "id">

  export type ExtraPlatoOrderByWithAggregationInput = {
    id?: SortOrder
    idPlato?: SortOrder
    idExtra?: SortOrder
    _count?: ExtraPlatoCountOrderByAggregateInput
    _avg?: ExtraPlatoAvgOrderByAggregateInput
    _max?: ExtraPlatoMaxOrderByAggregateInput
    _min?: ExtraPlatoMinOrderByAggregateInput
    _sum?: ExtraPlatoSumOrderByAggregateInput
  }

  export type ExtraPlatoScalarWhereWithAggregatesInput = {
    AND?: ExtraPlatoScalarWhereWithAggregatesInput | ExtraPlatoScalarWhereWithAggregatesInput[]
    OR?: ExtraPlatoScalarWhereWithAggregatesInput[]
    NOT?: ExtraPlatoScalarWhereWithAggregatesInput | ExtraPlatoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExtraPlato"> | number
    idPlato?: IntWithAggregatesFilter<"ExtraPlato"> | number
    idExtra?: IntWithAggregatesFilter<"ExtraPlato"> | number
  }

  export type ExtraWhereInput = {
    AND?: ExtraWhereInput | ExtraWhereInput[]
    OR?: ExtraWhereInput[]
    NOT?: ExtraWhereInput | ExtraWhereInput[]
    id?: IntFilter<"Extra"> | number
    nombre?: StringFilter<"Extra"> | string
    platos?: ExtraPlatoListRelationFilter
  }

  export type ExtraOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    platos?: ExtraPlatoOrderByRelationAggregateInput
    _relevance?: ExtraOrderByRelevanceInput
  }

  export type ExtraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExtraWhereInput | ExtraWhereInput[]
    OR?: ExtraWhereInput[]
    NOT?: ExtraWhereInput | ExtraWhereInput[]
    nombre?: StringFilter<"Extra"> | string
    platos?: ExtraPlatoListRelationFilter
  }, "id">

  export type ExtraOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: ExtraCountOrderByAggregateInput
    _avg?: ExtraAvgOrderByAggregateInput
    _max?: ExtraMaxOrderByAggregateInput
    _min?: ExtraMinOrderByAggregateInput
    _sum?: ExtraSumOrderByAggregateInput
  }

  export type ExtraScalarWhereWithAggregatesInput = {
    AND?: ExtraScalarWhereWithAggregatesInput | ExtraScalarWhereWithAggregatesInput[]
    OR?: ExtraScalarWhereWithAggregatesInput[]
    NOT?: ExtraScalarWhereWithAggregatesInput | ExtraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Extra"> | number
    nombre?: StringWithAggregatesFilter<"Extra"> | string
  }

  export type PlatoCreateInput = {
    nombre: string
    descripcion: string
    precio: number
    extras?: ExtraPlatoCreateNestedManyWithoutPlatoInput
  }

  export type PlatoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    extras?: ExtraPlatoUncheckedCreateNestedManyWithoutPlatoInput
  }

  export type PlatoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    extras?: ExtraPlatoUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    extras?: ExtraPlatoUncheckedUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
  }

  export type PlatoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type PlatoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ExtraPlatoCreateInput = {
    plato?: PlatoCreateNestedOneWithoutExtrasInput
    extra?: ExtraCreateNestedOneWithoutPlatosInput
  }

  export type ExtraPlatoUncheckedCreateInput = {
    id?: number
    idPlato: number
    idExtra: number
  }

  export type ExtraPlatoUpdateInput = {
    plato?: PlatoUpdateOneWithoutExtrasNestedInput
    extra?: ExtraUpdateOneWithoutPlatosNestedInput
  }

  export type ExtraPlatoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPlato?: IntFieldUpdateOperationsInput | number
    idExtra?: IntFieldUpdateOperationsInput | number
  }

  export type ExtraPlatoCreateManyInput = {
    id?: number
    idPlato: number
    idExtra: number
  }

  export type ExtraPlatoUpdateManyMutationInput = {

  }

  export type ExtraPlatoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPlato?: IntFieldUpdateOperationsInput | number
    idExtra?: IntFieldUpdateOperationsInput | number
  }

  export type ExtraCreateInput = {
    nombre: string
    platos?: ExtraPlatoCreateNestedManyWithoutExtraInput
  }

  export type ExtraUncheckedCreateInput = {
    id?: number
    nombre: string
    platos?: ExtraPlatoUncheckedCreateNestedManyWithoutExtraInput
  }

  export type ExtraUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    platos?: ExtraPlatoUpdateManyWithoutExtraNestedInput
  }

  export type ExtraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    platos?: ExtraPlatoUncheckedUpdateManyWithoutExtraNestedInput
  }

  export type ExtraCreateManyInput = {
    id?: number
    nombre: string
  }

  export type ExtraUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ExtraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type ExtraPlatoListRelationFilter = {
    every?: ExtraPlatoWhereInput
    some?: ExtraPlatoWhereInput
    none?: ExtraPlatoWhereInput
  }

  export type ExtraPlatoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatoOrderByRelevanceInput = {
    fields: PlatoOrderByRelevanceFieldEnum | PlatoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlatoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
  }

  export type PlatoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type PlatoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
  }

  export type PlatoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
  }

  export type PlatoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type PlatoNullableScalarRelationFilter = {
    is?: PlatoWhereInput | null
    isNot?: PlatoWhereInput | null
  }

  export type ExtraNullableScalarRelationFilter = {
    is?: ExtraWhereInput | null
    isNot?: ExtraWhereInput | null
  }

  export type ExtraPlatoCountOrderByAggregateInput = {
    id?: SortOrder
    idPlato?: SortOrder
    idExtra?: SortOrder
  }

  export type ExtraPlatoAvgOrderByAggregateInput = {
    id?: SortOrder
    idPlato?: SortOrder
    idExtra?: SortOrder
  }

  export type ExtraPlatoMaxOrderByAggregateInput = {
    id?: SortOrder
    idPlato?: SortOrder
    idExtra?: SortOrder
  }

  export type ExtraPlatoMinOrderByAggregateInput = {
    id?: SortOrder
    idPlato?: SortOrder
    idExtra?: SortOrder
  }

  export type ExtraPlatoSumOrderByAggregateInput = {
    id?: SortOrder
    idPlato?: SortOrder
    idExtra?: SortOrder
  }

  export type ExtraOrderByRelevanceInput = {
    fields: ExtraOrderByRelevanceFieldEnum | ExtraOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExtraCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ExtraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExtraMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ExtraMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ExtraSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExtraPlatoCreateNestedManyWithoutPlatoInput = {
    create?: XOR<ExtraPlatoCreateWithoutPlatoInput, ExtraPlatoUncheckedCreateWithoutPlatoInput> | ExtraPlatoCreateWithoutPlatoInput[] | ExtraPlatoUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: ExtraPlatoCreateOrConnectWithoutPlatoInput | ExtraPlatoCreateOrConnectWithoutPlatoInput[]
    createMany?: ExtraPlatoCreateManyPlatoInputEnvelope
    connect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
  }

  export type ExtraPlatoUncheckedCreateNestedManyWithoutPlatoInput = {
    create?: XOR<ExtraPlatoCreateWithoutPlatoInput, ExtraPlatoUncheckedCreateWithoutPlatoInput> | ExtraPlatoCreateWithoutPlatoInput[] | ExtraPlatoUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: ExtraPlatoCreateOrConnectWithoutPlatoInput | ExtraPlatoCreateOrConnectWithoutPlatoInput[]
    createMany?: ExtraPlatoCreateManyPlatoInputEnvelope
    connect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExtraPlatoUpdateManyWithoutPlatoNestedInput = {
    create?: XOR<ExtraPlatoCreateWithoutPlatoInput, ExtraPlatoUncheckedCreateWithoutPlatoInput> | ExtraPlatoCreateWithoutPlatoInput[] | ExtraPlatoUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: ExtraPlatoCreateOrConnectWithoutPlatoInput | ExtraPlatoCreateOrConnectWithoutPlatoInput[]
    upsert?: ExtraPlatoUpsertWithWhereUniqueWithoutPlatoInput | ExtraPlatoUpsertWithWhereUniqueWithoutPlatoInput[]
    createMany?: ExtraPlatoCreateManyPlatoInputEnvelope
    set?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    disconnect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    delete?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    connect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    update?: ExtraPlatoUpdateWithWhereUniqueWithoutPlatoInput | ExtraPlatoUpdateWithWhereUniqueWithoutPlatoInput[]
    updateMany?: ExtraPlatoUpdateManyWithWhereWithoutPlatoInput | ExtraPlatoUpdateManyWithWhereWithoutPlatoInput[]
    deleteMany?: ExtraPlatoScalarWhereInput | ExtraPlatoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExtraPlatoUncheckedUpdateManyWithoutPlatoNestedInput = {
    create?: XOR<ExtraPlatoCreateWithoutPlatoInput, ExtraPlatoUncheckedCreateWithoutPlatoInput> | ExtraPlatoCreateWithoutPlatoInput[] | ExtraPlatoUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: ExtraPlatoCreateOrConnectWithoutPlatoInput | ExtraPlatoCreateOrConnectWithoutPlatoInput[]
    upsert?: ExtraPlatoUpsertWithWhereUniqueWithoutPlatoInput | ExtraPlatoUpsertWithWhereUniqueWithoutPlatoInput[]
    createMany?: ExtraPlatoCreateManyPlatoInputEnvelope
    set?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    disconnect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    delete?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    connect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    update?: ExtraPlatoUpdateWithWhereUniqueWithoutPlatoInput | ExtraPlatoUpdateWithWhereUniqueWithoutPlatoInput[]
    updateMany?: ExtraPlatoUpdateManyWithWhereWithoutPlatoInput | ExtraPlatoUpdateManyWithWhereWithoutPlatoInput[]
    deleteMany?: ExtraPlatoScalarWhereInput | ExtraPlatoScalarWhereInput[]
  }

  export type PlatoCreateNestedOneWithoutExtrasInput = {
    create?: XOR<PlatoCreateWithoutExtrasInput, PlatoUncheckedCreateWithoutExtrasInput>
    connectOrCreate?: PlatoCreateOrConnectWithoutExtrasInput
    connect?: PlatoWhereUniqueInput
  }

  export type ExtraCreateNestedOneWithoutPlatosInput = {
    create?: XOR<ExtraCreateWithoutPlatosInput, ExtraUncheckedCreateWithoutPlatosInput>
    connectOrCreate?: ExtraCreateOrConnectWithoutPlatosInput
    connect?: ExtraWhereUniqueInput
  }

  export type PlatoUpdateOneWithoutExtrasNestedInput = {
    create?: XOR<PlatoCreateWithoutExtrasInput, PlatoUncheckedCreateWithoutExtrasInput>
    connectOrCreate?: PlatoCreateOrConnectWithoutExtrasInput
    upsert?: PlatoUpsertWithoutExtrasInput
    disconnect?: PlatoWhereInput | boolean
    delete?: PlatoWhereInput | boolean
    connect?: PlatoWhereUniqueInput
    update?: XOR<XOR<PlatoUpdateToOneWithWhereWithoutExtrasInput, PlatoUpdateWithoutExtrasInput>, PlatoUncheckedUpdateWithoutExtrasInput>
  }

  export type ExtraUpdateOneWithoutPlatosNestedInput = {
    create?: XOR<ExtraCreateWithoutPlatosInput, ExtraUncheckedCreateWithoutPlatosInput>
    connectOrCreate?: ExtraCreateOrConnectWithoutPlatosInput
    upsert?: ExtraUpsertWithoutPlatosInput
    disconnect?: ExtraWhereInput | boolean
    delete?: ExtraWhereInput | boolean
    connect?: ExtraWhereUniqueInput
    update?: XOR<XOR<ExtraUpdateToOneWithWhereWithoutPlatosInput, ExtraUpdateWithoutPlatosInput>, ExtraUncheckedUpdateWithoutPlatosInput>
  }

  export type ExtraPlatoCreateNestedManyWithoutExtraInput = {
    create?: XOR<ExtraPlatoCreateWithoutExtraInput, ExtraPlatoUncheckedCreateWithoutExtraInput> | ExtraPlatoCreateWithoutExtraInput[] | ExtraPlatoUncheckedCreateWithoutExtraInput[]
    connectOrCreate?: ExtraPlatoCreateOrConnectWithoutExtraInput | ExtraPlatoCreateOrConnectWithoutExtraInput[]
    createMany?: ExtraPlatoCreateManyExtraInputEnvelope
    connect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
  }

  export type ExtraPlatoUncheckedCreateNestedManyWithoutExtraInput = {
    create?: XOR<ExtraPlatoCreateWithoutExtraInput, ExtraPlatoUncheckedCreateWithoutExtraInput> | ExtraPlatoCreateWithoutExtraInput[] | ExtraPlatoUncheckedCreateWithoutExtraInput[]
    connectOrCreate?: ExtraPlatoCreateOrConnectWithoutExtraInput | ExtraPlatoCreateOrConnectWithoutExtraInput[]
    createMany?: ExtraPlatoCreateManyExtraInputEnvelope
    connect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
  }

  export type ExtraPlatoUpdateManyWithoutExtraNestedInput = {
    create?: XOR<ExtraPlatoCreateWithoutExtraInput, ExtraPlatoUncheckedCreateWithoutExtraInput> | ExtraPlatoCreateWithoutExtraInput[] | ExtraPlatoUncheckedCreateWithoutExtraInput[]
    connectOrCreate?: ExtraPlatoCreateOrConnectWithoutExtraInput | ExtraPlatoCreateOrConnectWithoutExtraInput[]
    upsert?: ExtraPlatoUpsertWithWhereUniqueWithoutExtraInput | ExtraPlatoUpsertWithWhereUniqueWithoutExtraInput[]
    createMany?: ExtraPlatoCreateManyExtraInputEnvelope
    set?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    disconnect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    delete?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    connect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    update?: ExtraPlatoUpdateWithWhereUniqueWithoutExtraInput | ExtraPlatoUpdateWithWhereUniqueWithoutExtraInput[]
    updateMany?: ExtraPlatoUpdateManyWithWhereWithoutExtraInput | ExtraPlatoUpdateManyWithWhereWithoutExtraInput[]
    deleteMany?: ExtraPlatoScalarWhereInput | ExtraPlatoScalarWhereInput[]
  }

  export type ExtraPlatoUncheckedUpdateManyWithoutExtraNestedInput = {
    create?: XOR<ExtraPlatoCreateWithoutExtraInput, ExtraPlatoUncheckedCreateWithoutExtraInput> | ExtraPlatoCreateWithoutExtraInput[] | ExtraPlatoUncheckedCreateWithoutExtraInput[]
    connectOrCreate?: ExtraPlatoCreateOrConnectWithoutExtraInput | ExtraPlatoCreateOrConnectWithoutExtraInput[]
    upsert?: ExtraPlatoUpsertWithWhereUniqueWithoutExtraInput | ExtraPlatoUpsertWithWhereUniqueWithoutExtraInput[]
    createMany?: ExtraPlatoCreateManyExtraInputEnvelope
    set?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    disconnect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    delete?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    connect?: ExtraPlatoWhereUniqueInput | ExtraPlatoWhereUniqueInput[]
    update?: ExtraPlatoUpdateWithWhereUniqueWithoutExtraInput | ExtraPlatoUpdateWithWhereUniqueWithoutExtraInput[]
    updateMany?: ExtraPlatoUpdateManyWithWhereWithoutExtraInput | ExtraPlatoUpdateManyWithWhereWithoutExtraInput[]
    deleteMany?: ExtraPlatoScalarWhereInput | ExtraPlatoScalarWhereInput[]
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type ExtraPlatoCreateWithoutPlatoInput = {
    extra?: ExtraCreateNestedOneWithoutPlatosInput
  }

  export type ExtraPlatoUncheckedCreateWithoutPlatoInput = {
    id?: number
    idExtra: number
  }

  export type ExtraPlatoCreateOrConnectWithoutPlatoInput = {
    where: ExtraPlatoWhereUniqueInput
    create: XOR<ExtraPlatoCreateWithoutPlatoInput, ExtraPlatoUncheckedCreateWithoutPlatoInput>
  }

  export type ExtraPlatoCreateManyPlatoInputEnvelope = {
    data: ExtraPlatoCreateManyPlatoInput | ExtraPlatoCreateManyPlatoInput[]
    skipDuplicates?: boolean
  }

  export type ExtraPlatoUpsertWithWhereUniqueWithoutPlatoInput = {
    where: ExtraPlatoWhereUniqueInput
    update: XOR<ExtraPlatoUpdateWithoutPlatoInput, ExtraPlatoUncheckedUpdateWithoutPlatoInput>
    create: XOR<ExtraPlatoCreateWithoutPlatoInput, ExtraPlatoUncheckedCreateWithoutPlatoInput>
  }

  export type ExtraPlatoUpdateWithWhereUniqueWithoutPlatoInput = {
    where: ExtraPlatoWhereUniqueInput
    data: XOR<ExtraPlatoUpdateWithoutPlatoInput, ExtraPlatoUncheckedUpdateWithoutPlatoInput>
  }

  export type ExtraPlatoUpdateManyWithWhereWithoutPlatoInput = {
    where: ExtraPlatoScalarWhereInput
    data: XOR<ExtraPlatoUpdateManyMutationInput, ExtraPlatoUncheckedUpdateManyWithoutPlatoInput>
  }

  export type ExtraPlatoScalarWhereInput = {
    AND?: ExtraPlatoScalarWhereInput | ExtraPlatoScalarWhereInput[]
    OR?: ExtraPlatoScalarWhereInput[]
    NOT?: ExtraPlatoScalarWhereInput | ExtraPlatoScalarWhereInput[]
    id?: IntFilter<"ExtraPlato"> | number
    idPlato?: IntFilter<"ExtraPlato"> | number
    idExtra?: IntFilter<"ExtraPlato"> | number
  }

  export type PlatoCreateWithoutExtrasInput = {
    nombre: string
    descripcion: string
    precio: number
  }

  export type PlatoUncheckedCreateWithoutExtrasInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
  }

  export type PlatoCreateOrConnectWithoutExtrasInput = {
    where: PlatoWhereUniqueInput
    create: XOR<PlatoCreateWithoutExtrasInput, PlatoUncheckedCreateWithoutExtrasInput>
  }

  export type ExtraCreateWithoutPlatosInput = {
    nombre: string
  }

  export type ExtraUncheckedCreateWithoutPlatosInput = {
    id?: number
    nombre: string
  }

  export type ExtraCreateOrConnectWithoutPlatosInput = {
    where: ExtraWhereUniqueInput
    create: XOR<ExtraCreateWithoutPlatosInput, ExtraUncheckedCreateWithoutPlatosInput>
  }

  export type PlatoUpsertWithoutExtrasInput = {
    update: XOR<PlatoUpdateWithoutExtrasInput, PlatoUncheckedUpdateWithoutExtrasInput>
    create: XOR<PlatoCreateWithoutExtrasInput, PlatoUncheckedCreateWithoutExtrasInput>
    where?: PlatoWhereInput
  }

  export type PlatoUpdateToOneWithWhereWithoutExtrasInput = {
    where?: PlatoWhereInput
    data: XOR<PlatoUpdateWithoutExtrasInput, PlatoUncheckedUpdateWithoutExtrasInput>
  }

  export type PlatoUpdateWithoutExtrasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type PlatoUncheckedUpdateWithoutExtrasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ExtraUpsertWithoutPlatosInput = {
    update: XOR<ExtraUpdateWithoutPlatosInput, ExtraUncheckedUpdateWithoutPlatosInput>
    create: XOR<ExtraCreateWithoutPlatosInput, ExtraUncheckedCreateWithoutPlatosInput>
    where?: ExtraWhereInput
  }

  export type ExtraUpdateToOneWithWhereWithoutPlatosInput = {
    where?: ExtraWhereInput
    data: XOR<ExtraUpdateWithoutPlatosInput, ExtraUncheckedUpdateWithoutPlatosInput>
  }

  export type ExtraUpdateWithoutPlatosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ExtraUncheckedUpdateWithoutPlatosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ExtraPlatoCreateWithoutExtraInput = {
    plato?: PlatoCreateNestedOneWithoutExtrasInput
  }

  export type ExtraPlatoUncheckedCreateWithoutExtraInput = {
    id?: number
    idPlato: number
  }

  export type ExtraPlatoCreateOrConnectWithoutExtraInput = {
    where: ExtraPlatoWhereUniqueInput
    create: XOR<ExtraPlatoCreateWithoutExtraInput, ExtraPlatoUncheckedCreateWithoutExtraInput>
  }

  export type ExtraPlatoCreateManyExtraInputEnvelope = {
    data: ExtraPlatoCreateManyExtraInput | ExtraPlatoCreateManyExtraInput[]
    skipDuplicates?: boolean
  }

  export type ExtraPlatoUpsertWithWhereUniqueWithoutExtraInput = {
    where: ExtraPlatoWhereUniqueInput
    update: XOR<ExtraPlatoUpdateWithoutExtraInput, ExtraPlatoUncheckedUpdateWithoutExtraInput>
    create: XOR<ExtraPlatoCreateWithoutExtraInput, ExtraPlatoUncheckedCreateWithoutExtraInput>
  }

  export type ExtraPlatoUpdateWithWhereUniqueWithoutExtraInput = {
    where: ExtraPlatoWhereUniqueInput
    data: XOR<ExtraPlatoUpdateWithoutExtraInput, ExtraPlatoUncheckedUpdateWithoutExtraInput>
  }

  export type ExtraPlatoUpdateManyWithWhereWithoutExtraInput = {
    where: ExtraPlatoScalarWhereInput
    data: XOR<ExtraPlatoUpdateManyMutationInput, ExtraPlatoUncheckedUpdateManyWithoutExtraInput>
  }

  export type ExtraPlatoCreateManyPlatoInput = {
    id?: number
    idExtra: number
  }

  export type ExtraPlatoUpdateWithoutPlatoInput = {
    extra?: ExtraUpdateOneWithoutPlatosNestedInput
  }

  export type ExtraPlatoUncheckedUpdateWithoutPlatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExtra?: IntFieldUpdateOperationsInput | number
  }

  export type ExtraPlatoUncheckedUpdateManyWithoutPlatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExtra?: IntFieldUpdateOperationsInput | number
  }

  export type ExtraPlatoCreateManyExtraInput = {
    id?: number
    idPlato: number
  }

  export type ExtraPlatoUpdateWithoutExtraInput = {
    plato?: PlatoUpdateOneWithoutExtrasNestedInput
  }

  export type ExtraPlatoUncheckedUpdateWithoutExtraInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPlato?: IntFieldUpdateOperationsInput | number
  }

  export type ExtraPlatoUncheckedUpdateManyWithoutExtraInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPlato?: IntFieldUpdateOperationsInput | number
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