// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dao

import (
	"context"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"github.com/donknap/dpanel/common/entity"
)

func newSite(db *gorm.DB, opts ...gen.DOOption) site {
	_site := site{}

	_site.siteDo.UseDB(db, opts...)
	_site.siteDo.UseModel(&entity.Site{})

	tableName := _site.siteDo.TableName()
	_site.ALL = field.NewAsterisk(tableName)
	_site.ID = field.NewInt32(tableName, "id")
	_site.SiteName = field.NewString(tableName, "site_name")
	_site.SiteURL = field.NewString(tableName, "site_url")
	_site.SiteID = field.NewString(tableName, "site_id")
	_site.ContainerID = field.NewInt32(tableName, "container_id")
	_site.SiteURLExt = field.NewString(tableName, "site_url_ext")
	_site.Env = field.NewString(tableName, "env")
	_site.Status = field.NewInt32(tableName, "status")
	_site.Container = siteHasOneContainer{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Container", "entity.Container"),
	}

	_site.Task = siteTask{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Task", "entity.Task"),
	}

	_site.fillFieldMap()

	return _site
}

type site struct {
	siteDo

	ALL         field.Asterisk
	ID          field.Int32
	SiteName    field.String
	SiteURL     field.String
	SiteID      field.String
	ContainerID field.Int32
	SiteURLExt  field.String
	Env         field.String
	Status      field.Int32
	Container   siteHasOneContainer

	Task siteTask

	fieldMap map[string]field.Expr
}

func (s site) Table(newTableName string) *site {
	s.siteDo.UseTable(newTableName)
	return s.updateTableName(newTableName)
}

func (s site) As(alias string) *site {
	s.siteDo.DO = *(s.siteDo.As(alias).(*gen.DO))
	return s.updateTableName(alias)
}

func (s *site) updateTableName(table string) *site {
	s.ALL = field.NewAsterisk(table)
	s.ID = field.NewInt32(table, "id")
	s.SiteName = field.NewString(table, "site_name")
	s.SiteURL = field.NewString(table, "site_url")
	s.SiteID = field.NewString(table, "site_id")
	s.ContainerID = field.NewInt32(table, "container_id")
	s.SiteURLExt = field.NewString(table, "site_url_ext")
	s.Env = field.NewString(table, "env")
	s.Status = field.NewInt32(table, "status")

	s.fillFieldMap()

	return s
}

func (s *site) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := s.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (s *site) fillFieldMap() {
	s.fieldMap = make(map[string]field.Expr, 10)
	s.fieldMap["id"] = s.ID
	s.fieldMap["site_name"] = s.SiteName
	s.fieldMap["site_url"] = s.SiteURL
	s.fieldMap["site_id"] = s.SiteID
	s.fieldMap["container_id"] = s.ContainerID
	s.fieldMap["site_url_ext"] = s.SiteURLExt
	s.fieldMap["env"] = s.Env
	s.fieldMap["status"] = s.Status

}

func (s site) clone(db *gorm.DB) site {
	s.siteDo.ReplaceConnPool(db.Statement.ConnPool)
	return s
}

func (s site) replaceDB(db *gorm.DB) site {
	s.siteDo.ReplaceDB(db)
	return s
}

type siteHasOneContainer struct {
	db *gorm.DB

	field.RelationField
}

func (a siteHasOneContainer) Where(conds ...field.Expr) *siteHasOneContainer {
	if len(conds) == 0 {
		return &a
	}

	exprs := make([]clause.Expression, 0, len(conds))
	for _, cond := range conds {
		exprs = append(exprs, cond.BeCond().(clause.Expression))
	}
	a.db = a.db.Clauses(clause.Where{Exprs: exprs})
	return &a
}

func (a siteHasOneContainer) WithContext(ctx context.Context) *siteHasOneContainer {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a siteHasOneContainer) Session(session *gorm.Session) *siteHasOneContainer {
	a.db = a.db.Session(session)
	return &a
}

func (a siteHasOneContainer) Model(m *entity.Site) *siteHasOneContainerTx {
	return &siteHasOneContainerTx{a.db.Model(m).Association(a.Name())}
}

type siteHasOneContainerTx struct{ tx *gorm.Association }

func (a siteHasOneContainerTx) Find() (result *entity.Container, err error) {
	return result, a.tx.Find(&result)
}

func (a siteHasOneContainerTx) Append(values ...*entity.Container) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a siteHasOneContainerTx) Replace(values ...*entity.Container) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a siteHasOneContainerTx) Delete(values ...*entity.Container) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a siteHasOneContainerTx) Clear() error {
	return a.tx.Clear()
}

func (a siteHasOneContainerTx) Count() int64 {
	return a.tx.Count()
}

type siteTask struct {
	db *gorm.DB

	field.RelationField
}

func (a siteTask) Where(conds ...field.Expr) *siteTask {
	if len(conds) == 0 {
		return &a
	}

	exprs := make([]clause.Expression, 0, len(conds))
	for _, cond := range conds {
		exprs = append(exprs, cond.BeCond().(clause.Expression))
	}
	a.db = a.db.Clauses(clause.Where{Exprs: exprs})
	return &a
}

func (a siteTask) WithContext(ctx context.Context) *siteTask {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a siteTask) Session(session *gorm.Session) *siteTask {
	a.db = a.db.Session(session)
	return &a
}

func (a siteTask) Model(m *entity.Site) *siteTaskTx {
	return &siteTaskTx{a.db.Model(m).Association(a.Name())}
}

type siteTaskTx struct{ tx *gorm.Association }

func (a siteTaskTx) Find() (result *entity.Task, err error) {
	return result, a.tx.Find(&result)
}

func (a siteTaskTx) Append(values ...*entity.Task) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a siteTaskTx) Replace(values ...*entity.Task) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a siteTaskTx) Delete(values ...*entity.Task) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a siteTaskTx) Clear() error {
	return a.tx.Clear()
}

func (a siteTaskTx) Count() int64 {
	return a.tx.Count()
}

type siteDo struct{ gen.DO }

type ISiteDo interface {
	gen.SubQuery
	Debug() ISiteDo
	WithContext(ctx context.Context) ISiteDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ISiteDo
	WriteDB() ISiteDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ISiteDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ISiteDo
	Not(conds ...gen.Condition) ISiteDo
	Or(conds ...gen.Condition) ISiteDo
	Select(conds ...field.Expr) ISiteDo
	Where(conds ...gen.Condition) ISiteDo
	Order(conds ...field.Expr) ISiteDo
	Distinct(cols ...field.Expr) ISiteDo
	Omit(cols ...field.Expr) ISiteDo
	Join(table schema.Tabler, on ...field.Expr) ISiteDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ISiteDo
	RightJoin(table schema.Tabler, on ...field.Expr) ISiteDo
	Group(cols ...field.Expr) ISiteDo
	Having(conds ...gen.Condition) ISiteDo
	Limit(limit int) ISiteDo
	Offset(offset int) ISiteDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ISiteDo
	Unscoped() ISiteDo
	Create(values ...*entity.Site) error
	CreateInBatches(values []*entity.Site, batchSize int) error
	Save(values ...*entity.Site) error
	First() (*entity.Site, error)
	Take() (*entity.Site, error)
	Last() (*entity.Site, error)
	Find() ([]*entity.Site, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Site, err error)
	FindInBatches(result *[]*entity.Site, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*entity.Site) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ISiteDo
	Assign(attrs ...field.AssignExpr) ISiteDo
	Joins(fields ...field.RelationField) ISiteDo
	Preload(fields ...field.RelationField) ISiteDo
	FirstOrInit() (*entity.Site, error)
	FirstOrCreate() (*entity.Site, error)
	FindByPage(offset int, limit int) (result []*entity.Site, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ISiteDo
	UnderlyingDB() *gorm.DB
	schema.Tabler
}

func (s siteDo) Debug() ISiteDo {
	return s.withDO(s.DO.Debug())
}

func (s siteDo) WithContext(ctx context.Context) ISiteDo {
	return s.withDO(s.DO.WithContext(ctx))
}

func (s siteDo) ReadDB() ISiteDo {
	return s.Clauses(dbresolver.Read)
}

func (s siteDo) WriteDB() ISiteDo {
	return s.Clauses(dbresolver.Write)
}

func (s siteDo) Session(config *gorm.Session) ISiteDo {
	return s.withDO(s.DO.Session(config))
}

func (s siteDo) Clauses(conds ...clause.Expression) ISiteDo {
	return s.withDO(s.DO.Clauses(conds...))
}

func (s siteDo) Returning(value interface{}, columns ...string) ISiteDo {
	return s.withDO(s.DO.Returning(value, columns...))
}

func (s siteDo) Not(conds ...gen.Condition) ISiteDo {
	return s.withDO(s.DO.Not(conds...))
}

func (s siteDo) Or(conds ...gen.Condition) ISiteDo {
	return s.withDO(s.DO.Or(conds...))
}

func (s siteDo) Select(conds ...field.Expr) ISiteDo {
	return s.withDO(s.DO.Select(conds...))
}

func (s siteDo) Where(conds ...gen.Condition) ISiteDo {
	return s.withDO(s.DO.Where(conds...))
}

func (s siteDo) Order(conds ...field.Expr) ISiteDo {
	return s.withDO(s.DO.Order(conds...))
}

func (s siteDo) Distinct(cols ...field.Expr) ISiteDo {
	return s.withDO(s.DO.Distinct(cols...))
}

func (s siteDo) Omit(cols ...field.Expr) ISiteDo {
	return s.withDO(s.DO.Omit(cols...))
}

func (s siteDo) Join(table schema.Tabler, on ...field.Expr) ISiteDo {
	return s.withDO(s.DO.Join(table, on...))
}

func (s siteDo) LeftJoin(table schema.Tabler, on ...field.Expr) ISiteDo {
	return s.withDO(s.DO.LeftJoin(table, on...))
}

func (s siteDo) RightJoin(table schema.Tabler, on ...field.Expr) ISiteDo {
	return s.withDO(s.DO.RightJoin(table, on...))
}

func (s siteDo) Group(cols ...field.Expr) ISiteDo {
	return s.withDO(s.DO.Group(cols...))
}

func (s siteDo) Having(conds ...gen.Condition) ISiteDo {
	return s.withDO(s.DO.Having(conds...))
}

func (s siteDo) Limit(limit int) ISiteDo {
	return s.withDO(s.DO.Limit(limit))
}

func (s siteDo) Offset(offset int) ISiteDo {
	return s.withDO(s.DO.Offset(offset))
}

func (s siteDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ISiteDo {
	return s.withDO(s.DO.Scopes(funcs...))
}

func (s siteDo) Unscoped() ISiteDo {
	return s.withDO(s.DO.Unscoped())
}

func (s siteDo) Create(values ...*entity.Site) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Create(values)
}

func (s siteDo) CreateInBatches(values []*entity.Site, batchSize int) error {
	return s.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (s siteDo) Save(values ...*entity.Site) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Save(values)
}

func (s siteDo) First() (*entity.Site, error) {
	if result, err := s.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Site), nil
	}
}

func (s siteDo) Take() (*entity.Site, error) {
	if result, err := s.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Site), nil
	}
}

func (s siteDo) Last() (*entity.Site, error) {
	if result, err := s.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Site), nil
	}
}

func (s siteDo) Find() ([]*entity.Site, error) {
	result, err := s.DO.Find()
	return result.([]*entity.Site), err
}

func (s siteDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Site, err error) {
	buf := make([]*entity.Site, 0, batchSize)
	err = s.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (s siteDo) FindInBatches(result *[]*entity.Site, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return s.DO.FindInBatches(result, batchSize, fc)
}

func (s siteDo) Attrs(attrs ...field.AssignExpr) ISiteDo {
	return s.withDO(s.DO.Attrs(attrs...))
}

func (s siteDo) Assign(attrs ...field.AssignExpr) ISiteDo {
	return s.withDO(s.DO.Assign(attrs...))
}

func (s siteDo) Joins(fields ...field.RelationField) ISiteDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Joins(_f))
	}
	return &s
}

func (s siteDo) Preload(fields ...field.RelationField) ISiteDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Preload(_f))
	}
	return &s
}

func (s siteDo) FirstOrInit() (*entity.Site, error) {
	if result, err := s.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Site), nil
	}
}

func (s siteDo) FirstOrCreate() (*entity.Site, error) {
	if result, err := s.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Site), nil
	}
}

func (s siteDo) FindByPage(offset int, limit int) (result []*entity.Site, count int64, err error) {
	result, err = s.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = s.Offset(-1).Limit(-1).Count()
	return
}

func (s siteDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = s.Count()
	if err != nil {
		return
	}

	err = s.Offset(offset).Limit(limit).Scan(result)
	return
}

func (s siteDo) Scan(result interface{}) (err error) {
	return s.DO.Scan(result)
}

func (s siteDo) Delete(models ...*entity.Site) (result gen.ResultInfo, err error) {
	return s.DO.Delete(models)
}

func (s *siteDo) withDO(do gen.Dao) *siteDo {
	s.DO = *do.(*gen.DO)
	return s
}
