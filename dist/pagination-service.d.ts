import { EventEmitter } from 'angular2/core';
export interface IPaginationInstance {
    /**
     * An optional ID for the pagination instance. Only useful if you wish to
     * have more than once instance at a time in a given component.
     */
    id?: string;
    /**
     * The number of items per paginated page.
     */
    itemsPerPage: number;
    /**
     * The current (active) page.
     */
    currentPage: number;
    /**
     * The total number of items in the collection. Only useful when
     * doing server-side paging, where the collection size is limited
     * to a single page returned by the server API.
     *
     * For in-memory paging, this property should not be set, as it
     * will be automatically set to the value of  collection.length.
     */
    totalItems?: number;
}
export declare class PaginationService {
    change: EventEmitter<string>;
    private instances;
    private DEFAULT_ID;
    defaultId: string;
    static templateUrl: string;
    static template: string;
    register(instance: IPaginationInstance): void;
    /**
     * Returns the current page number.
     */
    getCurrentPage(id: string): number;
    /**
     * Sets the current page number.
     */
    setCurrentPage(id: string, page: number): void;
    /**
     * Sets the value of instance.totalItems
     */
    setTotalItems(id: string, totalItems: number): void;
    /**
     * Sets the value of instance.itemsPerPage.
     */
    setItemsPerPage(id: string, itemsPerPage: number): void;
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    getInstance(id?: string): IPaginationInstance;
    /**
     * Perform a shallow clone of an object.
     */
    private clone(obj);
}
